// Imports - Note withRouter addition
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Photo from './Photo';
import NotFound from './NotFound';

/**
 * PhotoContainer Component
 * @returns - Successful loading of the images
 */
class PhotoContainer extends Component {

    state = {
        title: ""
    }

    /**
     * componentDidMount Function - React LifeCycle Method
     * Description: Listens to URL path so state can be updated
     * @returns {string} - Updates state according to the url
     */
    componentDidMount() {
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

    /**
     * componentDidUpdate Function - React LifeCycle Method
     * Description: Important for the history, and browser navigation. Focusing on 3 tasks:
     *              1. Notes the URL params passed
     *              2. Notes the keyword passed via props
     *              3. If 1 and 2 don't match (due to back button) - Run the search function
     * @returns {function call} - Will run imageSearch() if necessary
     */
    componentDidUpdate() {
        const inPath = this.props.match.params.item;
        const updatedTerm  = this.props.term;
        if (inPath !== updatedTerm) {
            this.props.search(inPath);
        }
    }

    /**
     * loadImages Function
     * @returns 
     */
    loadImages = () => {
        let results = this.props.images;
        let images = results.map(image => <Photo info={image} key={image.id} /> );
        return images;
    }

    /**
     * Render Method - IMPORTANT NOTES
     * Description: To enable loading indicator, a nested ternary operator has been used
     * @returns Loading Indicator, followed by images or "NotFound" Component
     */ 

    render() {
        return (
            <div className="photo-container">
                {(this.props.loading) ? <h1>Loading...</h1> :
                    (this.props.images.length > 0) ? 
                    <div>
                        <h2>{`${this.state.title} images`}</h2>
                        <ul>{this.loadImages()}</ul>
                    </div>
                    : <NotFound />
                }
            </div>
        ); 
    }
}

export default withRouter(PhotoContainer);