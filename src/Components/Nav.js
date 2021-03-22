// Imports - Note: NavLink
import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Nav Component 
 * @returns Navigation bar for the 3 pre-fetched categories
 */
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/giraffe">Giraffes</NavLink></li>
                <li><NavLink to="/elephant">Elephants</NavLink></li>
                <li><NavLink to="/duck">Ducks</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;