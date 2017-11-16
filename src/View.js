import React, { PureComponent } from 'react';
import ListView from './Components/ListView';
import GalleryView from './Components/GalleryView';
import ThumbView from './Components/ThumbView';

class View extends PureComponent {
  constructor() {
    super();
    this.state = {
      bunnies: [
        { title: 'Halloween Bunny',
          description: 'Trick or treat?',
          url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' },
      	{ title: 'Belly Bunny',
          description: 'I\'m a rub-my-belly bunny',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' },
      	{ title: 'Side-Eye Bunny',
          description: 'Were you taking to me?',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' }
      ],
      viewStyle: 'list'
    };
  }
	
  handleViewChange(viewStyle) {
    this.setState({ viewStyle });
  }
	
  render() {
    const { bunnies, viewStyle } = this.state;
    let currentView;
    (viewStyle === 'list') && (currentView = <ListView bunnies={bunnies}/>);
    (viewStyle === 'gallery') && (currentView = <GalleryView bunnies={bunnies}/>);
    (viewStyle === 'thumbnail') && (currentView = <ThumbView bunnies={bunnies}/>);

    return (
      <div>
        { currentView }
        <input type="button" value="Bunny List" onClick={(event) => this.handleViewChange('list')}/>
        <input type="button" value="Bunny Gallery" onClick={(event) => this.handleViewChange('gallery')}/>
        <input type="button" value="Bunny Thumbnail" onClick={(event) => this.handleViewChange('thumbnail')}/>
      </div>

    );
  }
}

export default View;