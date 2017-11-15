import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';
import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

class View extends PureComponent {
    constructor(){
        super();
        this.state = {
            images: [
                { 
                    title: 'Cute Bunny',
                    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
                    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
                },
                { 
                    title: 'Cute Bunny2',
                    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
                    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
                },
                { 
                    title: 'Cute Bunny3',
                    description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
                    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
                }
            ],
            viewSelection:'thumbnail'
        }
    }
    handleViewChange(value){
        this.setState({viewSelection: value});
    }

    render(){
        const { images, viewSelection } = this.state;
        let displayMode;
        (viewSelection === 'list') && (displayMode = <List images={ images }/>);
        (viewSelection === 'thumbnail') && (displayMode = <Thumbnail images={ images }/>);
        (viewSelection === 'gallery') && (displayMode = <Gallery images={ images }/>);
        return(
          <div>
            <input type="button" value="list" onClick={({ target }) => this.handleViewChange(target.value) }/>
            <input type="button" value="thumbnail" onClick={({ target }) => this.handleViewChange(target.value) }/>
            <input type="button" value="gallery" onClick={({ target }) => this.handleViewChange(target.value) }/>
            { displayMode }
          </div>
        );
    }
}

export default View;