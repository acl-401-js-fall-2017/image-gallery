import React, { PureComponent } from 'react';

class Gallery extends PureComponent {
    constructor(){
        super();
        this.state = {
            index: 0
        }
    }
    handleImageSelection(value){
        let i = value === "next" ? 1: -1;
        this.setState({index: this.state.index + i })
    }
    render(){
        const { images } = this.props;
        const currentImage = images[this.state.index]
        const display = <img src={currentImage.url} alt={currentImage.description} height="40%" width="40%"/>
        return(
            <div>
                <input type="button" value="next" onClick={({ target }) => this.handleImageSelection(target.value) }/>
                <input type="button" value="back" onClick={({ target }) => this.handleImageSelection(target.value) }/>
                {display}
            </div>
        );
    }
}

export default Gallery;