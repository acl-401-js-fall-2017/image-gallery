import React, { Component } from 'react';
import GameField from './GameField';

class Minigme extends Component {
  constructor() {
    super();
    this.state = {
      endgame: {
        gameOver: false,
        winner: null,
        score: {
          A: 0,
          Z: 0
        }
      },
      paused: true,
      player: {
        A: {
          name: 'A',
          team: 'left',
          advantage: true,
          position: {
            x: 200,
            y: 200
          },
          radius: 20,
          color: 'red',
          speed: 10
        },
        Z: {
          name: 'Z',
          team: 'right',
          advantage: true,
          position: {
            x: 390,
            y: 200
          },
          radius: 20,
          color: 'blue',
          speed: 10
        }
      },
      grid: {
        dimensions: {
          height: 400,
          width: 600
        }
      }
    };

    // settings
    this.stepSize = 3;
    this.minRadius = 5;
    this.maxRadius = 50;
    this.showMeta = false;

    // player 
    this.playerABot = false;
    this.playerZBot = false;

    // parameters
    this.warp = 300;
    this.slide = 0;
    this.invertAdvantage = true;
    this.frameCount = 0;

    // timeout objects
    this.t = {}

    // bound prototype methods
    this.startMove = this.startMove.bind(this);
    this.move = this.move.bind(this);
    this.stopMove = this.stopMove.bind(this);
    this.onGridFocus = this.onGridFocus.bind(this);
    this.play = this.play.bind(this);
    this.timeStep = this.timeStep.bind(this);
    this.pause = this.pause.bind(this);
    this.onReplay = this.onReplay.bind(this);
    this.fieldShift = this.fieldShift.bind(this);
    this.playerAugment = this.playerAugment.bind(this);
    this.playerContact = this.playerContact.bind(this);
    this.botMove = this.botMove.bind(this);
  }

  componentWillUpdate() {
    this.frameCount++;
  }

  onKeyDown = isTrue => ({ key }) => {
    const { paused } = this.state;
    const playerZ = this.playerZBot ? false: key.includes('Arrow');
    const playerA = this.playerABot ? false : 'wasd'.includes(key);

    if((playerA || playerZ) && !paused) isTrue ? this.startMove(playerA ? 'A' : 'Z', key) : this.stopMove(key);
    else if(isTrue && key === ' ') paused ? this.play() : this.pause();
  }

  startMove(pId, key) {
    if(!this.t[key]) this.move(pId, key);
  }

  move(pId, key) {
    const { player, grid: { dimensions } } = this.state;
    const thisPlayer = player[pId];
    const maxX = dimensions.width - thisPlayer.radius;
    const maxY = dimensions.height - thisPlayer.radius;
    const minXY = thisPlayer.radius;
    switch(key) {
      case 'ArrowUp':
      case 'w':
        if(thisPlayer.position.y > minXY) {        
            thisPlayer.position.y -= this.stepSize;
            this.setState({player: player});
          }
      break;
      case 'ArrowDown':
      case 's':
        if(thisPlayer.position.y < maxY) {
          thisPlayer.position.y += this.stepSize;
          this.setState({player: player});
        }
        break;
      case 'ArrowRight':
      case 'd':
        if(thisPlayer.position.x < maxX) {
          thisPlayer.position.x += this.stepSize;
          this.setState({player: player});
        }
        break;
      case 'ArrowLeft':
      case 'a':
        if(thisPlayer.position.x > minXY) {        
          thisPlayer.position.x -= this.stepSize;
          this.setState({player: player});
        }
        break;
      default:
    }

    this.t[key] = setTimeout(() => this.move(pId, key), 15 - thisPlayer.speed);
  }
    
  stopMove(key) {
    clearTimeout(this.t[key]);
    this.t[key] = null;
  }

  onGridFocus = hasFocus => () => hasFocus ? this.play() : this.pause();

  play() {
    if(this.state.paused === true) {
      const { endgame } = this.state;
      if(this.state.endgame.gameOver) {
        endgame.gameOver = false;
      }
      this.setState({ 
        paused: false,
        endgame: endgame
      });
      this.timeStep();
    }
  }

  timeStep() {
    const { player, grid: { dimensions }, endgame } = this.state;

    this.fieldShift();

    if(this.playerABot) this.botMove(player, 'A');
    if(this.playerZBot) this.botMove(player, 'Z');

    Object.keys(player).forEach(id => this.playerAugment(player, id, dimensions));

    this.playerContact(player);

    this.t.runtime = setTimeout(this.timeStep, 20);

    if(!endgame.gameOver) this.setState({ player: player});
  }

  botMove(player, id) {
    const { position: thisPos, radius: thisRad } = player[id];
    // const { grid } = this.state;
    
    const enemyId = id === 'A' ? 'Z' : 'A';
    const { position: enemyPos, radius: enemyRad } = player[enemyId];

    const distance = Math.sqrt(Math.pow(thisPos.x - enemyPos.x, 2) + Math.pow(thisPos.y - enemyPos.y, 2));
    const isInPersonalBubble = distance < 200;

    const chase = (direction) => enemyPos[direction] < thisPos[direction] ? -this.stepSize : this.stepSize;
    const flee = (direction) => isInPersonalBubble && enemyPos[direction] < thisPos[direction]  ? this.stepSize : -this.stepSize;
    const reactToEnemy = (direction) => thisRad > enemyRad ? chase(direction) : flee(direction);

    thisPos.x += reactToEnemy('x');
    thisPos.y += reactToEnemy('y');

    // const onEachAxis = action => Object.keys(thisPos).forEach(action)
    // const sizeComp = thisRad - enemyRad;
    // const isNearCorner = 1 - 1 / 36 * (0 - thisPos.x) * (thisPos.x - grid.dimensions.width) * (0 - thisPos.y) * (thisPos.y - grid.Dimensions.width) // closer to walls brings equation closer to 1. equation is 0 at center of map
    // if(sizeComp > 0) {
    //   const chase = direction => thisPos[direction] += enemyPos[direction] < thisPos[direction] ? -this.stepSize : this.stepSize
    //   onEachAxis(chase);
    // }
    // else {
    //   if(isNearCorner > +sizeComp / 100)
    //   console.log('Too near corner!')
    // }
  }

  fieldShift() {
    if(Math.random() * 250 < 1) this.invertAdvantage = !this.invertAdvantage;

    const newWarp = (Math.random() - Math.random()) * 10 + this.warp;
    if(newWarp > 100 && newWarp < 500) this.warp = newWarp;

    const newSlide = (Math.random() - Math.random()) * 30 + this.slide;
    if(newSlide > -300 && newSlide < 300) this.slide = newSlide;
  }

  playerAugment(player, id, gridDimensions) {
    const radDiff = buildAdvantage(player[id].team, player[id].position.x, player[id].radius, this.maxRadius, this.minRadius, this.warp, this.slide, this.invertAdvantage);
    player[id].radius += radDiff;
    player[id].advantage = radDiff < 0 ? false : true;
    const maxX = gridDimensions.width - player[id].radius;
    const maxY = gridDimensions.height - player[id].radius;

    player[id].speed = calcSpeed(player[id].radius);

    if(player[id].position.x < player[id].radius) player[id].position.x = player[id].radius;
    else if(player[id].position.x > maxX) player[id].position.x = maxX;

    if(player[id].position.y < player[id].radius) player[id].position.y = player[id].radius;
    else if(player[id].position.y > maxY) player[id].position.y = maxY;
  }

  playerContact(player) {
    const touched = this.touch();
    if(touched) {
      const {
        A: {radius: aRad },
        Z: {radius: zRad }
      } = this.state.player;
      const diff = touched;

      if(aRad > zRad) {
        player.Z.radius -= diff * 2;
        if(player.Z.radius <= 1) this.gameover(Object.assign({}, player.A));
        else player.A.radius = Math.sqrt(Math.pow(aRad, 2) - 4 * Math.pow(diff, 2));
      }
      else if(zRad > aRad) {
        player.A.radius -= diff * 2;
        if(player.A.radius <= 1) this.gameover(Object.assign({}, player.Z));
        else player.Z.radius = Math.sqrt(Math.pow(zRad, 2) - 4 * Math.pow(diff, 2));
      }
    }
  }
  
  pause() {
    this.setState({ paused: true });
    for(let loop in this.t) {
      clearTimeout(this.t[loop]);
      this.t[loop] = null;
    }
  }

  touch() {
    const {
      A: { position: a, radius: aRad },
      Z: { position: z, radius: zRad }
    } = this.state.player;
    const distance = Math.sqrt(Math.pow(a.x - z.x, 2) + Math.pow(a.y - z.y, 2))
    const touchPt = aRad + zRad;
    return distance <= touchPt ? touchPt - distance : 0;
  }

  gameover(playerStats) {
    this.pause();

    const outcome = () => {
      const { endgame } = this.state;
      endgame.gameOver = true;
      endgame.winner = playerStats;
      endgame.score[playerStats.name]++;
      return endgame;
    }

    const reset = () => {
      const { player } = this.state;
      Object.keys(player).forEach(id => {
        player[id].position.x = player[id].team === 'left' ? 200 : 390;
        player[id].position.y = 200;
        player[id].radius = 20;
        player[id].speed = 10;
      });
      return player;
    }

    this.warp = 300;
    this.slide = 0;
    this.invertAdvantage = false;
    
    this.setState({ 
      endgame: outcome(playerStats),
      player: reset()
    });
  }  

  onReplay() {
    const { endgame } = this.state;
    endgame.gameOver = false;
    this.setState({ endgame: endgame });
    this.play();
  }

  render() {

    const {
      endgame,
      paused,
      player
    } = this.state;
    return (
      <div className="Minigame">
        <GameField
          players={player}
          endgame={endgame}
          paused={paused}
          slide={this.slide}
          warp={this.warp}
          invertAdvantage={this.invertAdvantage}
          showMeta={this.showMeta}
          onKeyDown={this.onKeyDown}
          onGridFocus={this.onGridFocus} 
          onReplay={this.onReplay}
        />
        <h1
          style={{
            color: 'white'
          }}
        >
          {this.showMeta && this.frameCount}
        </h1>
      </div>
    );
  }
}

function buildAdvantage(side, x, r, maxR, minR, warp, slide, invert) {
  x = side === (invert ? 'left' : 'right') ? 600 - x + slide : x - slide;
  const diff = Math.atan((x - warp) / 100) * (-2 / 2025 * r + 53 / 810 * r + 17 / 324 ) / 10;

  return (
    (r < minR && diff < 0) ||
    (r > maxR && diff > 0) 
  ) ? 0 : diff;
}

function calcSpeed(r) {
  return -2.2 * Math.atan(r / 10 - 2) + 7.5;
}

export default Minigme;
