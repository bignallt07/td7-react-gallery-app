import React, { Component } from 'react';

// Imported Components
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

    // console.log(props.images);

    const results = props.images;
    let images;

    if (results.length > 0) {
        images = results.map(image => <Photo info={image} key={image.id} />);  
    } else {
        images = <NotFound />
    }

    return (
        <ul>
            {images}
        </ul>
    );

}

export default PhotoContainer;