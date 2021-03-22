// Imports
import React from 'react';

/**
 * Photo Componenet
 * @param {*} props 
 * @returns list item with an image
 */
const Photo = (props) => {
    return (
        <li>
            <img src={`https://farm${props.info.farm}.staticflickr.com/${props.info.server}/${props.info.id}_${props.info.secret}.jpg`} alt="" />
        </li>
    );   
}

export default Photo;