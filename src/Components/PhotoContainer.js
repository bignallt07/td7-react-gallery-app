import React from 'react';

// Imported Components
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = () => {
    return (
        <ul>
        {/* WE WILL NOT USE 4 - THIS IS JUST SO CSS WORKS */}
            <Photo />
            <Photo />
            <Photo />
            <Photo />
            <NotFound />
        </ul>
    );
}

export default PhotoContainer;