import React, { PureComponent } from 'react';

class Thumbnail extends PureComponent {
    render(){
        const { images } =this.props;
        const list = images.map((image, index)=> {
            const listItem =
            <li key={index} float="left">
              <figcaption><a href={image.url}>{image.title}:</a></figcaption>
              <img src={image.url} alt={image.url} height="100" width="100"/>
            </li>;
		    return listItem;
        })
        return(
            <ul>
                {list}
            </ul>
        );
    }
}

export default Thumbnail;