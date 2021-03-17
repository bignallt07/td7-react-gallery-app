import React from 'react';
import {NavLink} from 'react-router-dom';

// import PhotoContainer from './PhotoContainer';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cats">Cats</NavLink></li>
                <li><NavLink to="/dogs">Dogs</NavLink></li>
                <li><NavLink to="/computers">Computers</NavLink></li>
            </ul>

            {/* <Route path='/cats' render={ () => <PhotoContainer title={"cats"} />} /> 
            <Route path='/dogs' render={ () => <PhotoContainer title={"dogs"} />} /> 
            <Route path='/computers' render={ () => <PhotoContainer title={"computers"} />} /> */}
        </nav>
    );
}

export default Nav;