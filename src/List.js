import React, { PureComponent } from 'react';

class List extends PureComponent {
    render(){
        const { images } =this.props;
        const list = images.map((image, i) => {
            const listItem = 
            <tr key={i}>
              <a href={image.url}>{image.title}:</a>
              <td>Description: {image.description}</td>
            </tr>
		    return listItem;
        })
        return(
            <table>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
}

export default List;