import React, { PureComponent, Component } from 'react';

class ImageAdd extends Component {
    constructor(){
        super();
        this.state = {
            title: false,
            url: false,
            description: false
        }
    }
    addImage = event => {
        event.preventDefault();
        const { title, url, description } = this.state;
        const newImage = {
            title,
            url,
            description,
        }
        console.log('I am th eform data ', newImage);
    }

    //makeImageobj = event => this.props.handleAdd(event, this.state);

    makeImageobj2 = event => {
        const title = event.target.name;
        const currentState = this.state;
        currentState[title] = event.target.value;
        console.log('currenttttttt state', currentState);
    }
    
    render(){
        return(
            <form method="post" onSubmit={this.addImage}>
                <input name="title" type="text" onChange={event => this.makeImageobj2(event)}/>
                <input name="url" type="text" onChange={event => this.makeImageobj2(event)}/>
                <input name="description" type="text" onChange={event => this.makeImageobj2(event)}/>
                <input type="submit"/>
            </form> 
        );
    }
}

class List extends PureComponent {
    render(){
        const { images, handleDelete, handleAdd } =this.props;
        const list = images.map((image, i) => {
            const listItem = 
            <tr key={i}>
              <a href={image.url}>{image.title}:</a>
              <td>Description: {image.description}</td>
              <td><input data-value={image._id} type="button" value="remove" onClick ={({ target }) => handleDelete(target.dataset.value)}/></td>
            </tr>
		    return listItem;
        })
        
        return(
          <div>
            <table>
                <tbody>
                    {list}
                </tbody>
            </table>
            <ImageAdd handleAdd={handleAdd}/>
          </div>
        );
    }
}

export default List;