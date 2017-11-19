import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import GalleryButtons from './GalleryButtons';
import { slide } from '../actions';
import './styles/Gallery.css';

class Gallery extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      currentImg: 0,
    };
    this.props = props;
  }

  onSlide = direction => () => {
    const newState = slide(this.state, direction, this.props.images.length);
    this.setState(newState);
    this.props.history.push(`${this.props.match.url}/${newState.currentImg}`)
  }

  render() {
    const { match, images } = this.props;
    const { currentImg } = this.state;

    return (
      <Router>
        <div className="Gallery">
          {/* { img &&
            <div id={img.title} className="imgSlide">
              <img src={img.url} alt={img.title}/>
              <div className='slideInfo'>
                <h3>{img.title}</h3>
                <p>{img.description}</p>
              </div>
            </div>
          } */}
          <Switch>
            {images.map((img, i) => (
              <Route path={`${match.url}/${i}`} render={() => (
                <div id={img.title} className="imgSlide">
                  <img src={img.url} alt={img.title}/>
                  <div className='slideInfo'>
                    <h3>{img.title}</h3>
                    <p>{img.description}</p>
                  </div>
                </div>
              )}/>
            ))}
          </Switch>
          <Redirect to={`${match.url}/${currentImg}`}></Redirect>
          <GalleryButtons
            onSlide={this.onSlide}
          />
        </div>
      </Router>
    );
  }
}

export default withRouter(Gallery);