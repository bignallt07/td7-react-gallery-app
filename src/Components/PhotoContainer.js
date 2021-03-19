import React, { Component } from 'react';

import {Redirect, withRouter} from 'react-router-dom';

// Imported Components
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    state = {
        title: "My Results"
    }

    componentDidMount() {
        this.updateTitle();
    //     if (this.props.search) {
    //         this.props.search(this.state.title);
    //         console.log("happening")
    //     }
    }

   
    updateTitle = () => {
        let path = this.props.history.location.pathname;
        if (path.includes("/search")) {
            this.setState({
                title: path.substring(8)
            })
        } else {
            this.setState({
                title: path.substring(1)
            })
        }
    }


    loadImages = () => {
        if (this.props.images.length > 0) {
            let results = this.props.images;
            let images = results.map(image => <Photo info={image} key={image.id} /> );
            return images;
        // } else if (this.props.search) {
        //     let word = this.props.match.params.item;
        //     images = this.props.search(word);
        //     console.log(images);
            // if (images.length > 0) {
            //     images = results.map(image => <Photo info={image} key={image.id} />);  
            // } else {
            //     <Redirect to="/" Component={NotFound} />
            // }
        // } else if (this.props.images.length === 0) {
        //     <Redirect Component={NotFound} />
         }
    }

    render() {
        // console.log(this.props.images.length)  - Shows it is rendering twice
        return (
            <div className="photo-container">
                <h2>{`${this.state.title} images`}</h2>
                <ul>
                    {this.loadImages()}
                </ul>
            </div>
        ); 
    }

    


}

export default withRouter(PhotoContainer);