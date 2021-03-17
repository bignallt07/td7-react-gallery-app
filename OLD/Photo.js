import React from 'react';

const Photo = (props) => {
    return (
        <li>
            <img src={`https://farm${props.image.farm}.staticflickr.com/${props.image.server}/${props.image.id}_${props.image.secret}.jpg`} alt="" />
        </li>
    );   
}

export default Photo;