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
        const limit = this.state.index === images.length - 1; 
        const currentImage = images[this.state.index]
        const display = <img src={currentImage.url} alt={currentImage.description} height="40%" width="40%"/>
        const next = limit ? <input type="button" value="No more images"/> : 
        <input type="button" value="next" onClick={({ target }) => this.handleImageSelection(target.value) }/>
        const back = this.state.index === 0 ? <input type="button" value="No back"/> : 
        <input type="button" value="back" onClick={({ target }) => this.handleImageSelection(target.value) }/>

        return(
            <div>
                {next}
                {back}
                {display}
            </div>
        );
    }
}

export default Gallery;