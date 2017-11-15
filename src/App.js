import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import shortid from 'shortid';
import WonderList from './views/list';
import WonderThumbnail from './views/thumbnail';
import WonderGallery from './views/gallery';
import AddImage from './AddImage';
import { createWonder} from './actions';

const views = {
  list: WonderList,
  thumbnail: WonderThumbnail,
  gallery: WonderGallery
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      view: 'list',
      wonders: [
        {
          _id: shortid.generate(),
          title: 'Great Pyramid of Giza',
          description : 'The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex bordering what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.',
          url:'https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg'
        },
        {
          _id: shortid.generate(),
          title: 'Great Wall of China',
          description : 'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe.',
          url:'https://upload.wikimedia.org/wikipedia/commons/6/6f/The_Great_Wall_of_China_at_Jinshanling.jpg'
        },
        {
          _id: shortid.generate(),
          title: 'Petra',
          description : 'Petra, originally known to the Nabataeans as Raqmu, is a historical and archaeological city in southern Jordan. The city is famous for its rock-cut architecture and water conduit system. Another name for Petra is the Rose City due to the color of the stone out of which it is carved.',
          url:'https://upload.wikimedia.org/wikipedia/commons/b/b7/The_Monastery%2C_Petra%2C_Jordan8.jpg'
        },
        {
          _id: shortid.generate(),
          title: 'The Colosseum',
          description : 'The Colosseum or Coliseum , also known as the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [aŋfiteˈaːtro ˈflaːvjo] or Colosseo [kolosˈsɛːo]), is an oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and stone,[1] it is the largest amphitheatre ever built.',
          url:'https://upload.wikimedia.org/wikipedia/commons/f/f7/KOLOSSEUM_-_panoramio.jpg'
        },
        {
          _id: shortid.generate(),
          title: 'Chichen Itza',
          description : 'Chichen Itza was one of the largest Maya cities, with the relatively densely clustered architecture of the site core covering an area of at least 5 square kilometres (1.9 sq mi). Smaller scale residential architecture extends for an unknown distance beyond this. The city was built upon broken terrain, which was artificially levelled in order to build the major architectural groups, with the greatest effort being expended in the levelling of the areas for the Castillo pyramid, and the Las Monjas, Osario and Main Southwest groups.',
          url:'https://upload.wikimedia.org/wikipedia/commons/7/7a/Chichen-Itza-Castillo-Seen-From-East.JPG'
        },
        {
          _id: shortid.generate(),
          title: 'Machu Picchu',
          description : 'Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the "Lost City of the Incas" (a title more accurately applied to Vilcabamba), it is the most familiar icon of Inca civilization. The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish Conquest',
          url:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg'
        },
        {
          _id: shortid.generate(),
          title: 'Taj Mahal',
          description : 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned 1628–1658), to house the tomb of his favourite wife, Mumtaz Mahal. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.',
          url:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg'
        }
      ]
    }
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleOnSubmitCreateWonder = this.handleOnSubmitCreateWonder.bind(this);
    console.log(this.state.wonders)
  }

  handleViewChange(event) {
    this.setState({ view:event.target.value })
  }


  handleOnSubmitCreateWonder = (title, description, url) => {
    const newState = createWonder(this.state, title, description, url);
    this.setState(newState);
  }
  

  render() {
    const { wonders, view} = this.state;
    let CurrentView = views[view]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Wonders of The World!!!
        </p>
        <div>
         <button value='list' onClick={this.handleViewChange}>list</button>
         <button value='thumbnail' onClick={this.handleViewChange}>thumbnail</button>
         <button value='gallery' onClick={this.handleViewChange}>gallery</button>
        </div>
        <CurrentView wonders={wonders}/>  
        <AddImage handleOnSubmit={this.handleOnSubmitCreateWonder}/>
      </div>
    );
  }
}

export default App;
