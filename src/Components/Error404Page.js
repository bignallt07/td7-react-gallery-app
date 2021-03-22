// Imports
import React from 'react';
import {NavLink} from 'react-router-dom';


/**
 * Error404Page Component
 * @returns {Component Rendering} - 404 Page if the user enters an incorrect URL
 */
const Error404Page = () => {
    return (
        <div className="error-404-page">
            <h2 className="error-404-title">Oops! This page doesn't exist - Error 404</h2>
            <h4>So, I'll give you three options!</h4>
            <div className="clearfix">
                <div className="box option-1">
                    <p className="number">1</p> 
                    <p className="explanation">Search again (that option is at the top)</p>
                </div>
                <div className="box option-2">
                    <p className="number">2</p>
                    <p className="explanation">See some elephants, Giraffes or Ducks again (that option is just below the last option)</p>
                </div>
            </div>
            <div className="option-3">
                <p className="number">3</p>
                <p>Start again (just press take me home, below). spoiler, its Giraffes</p>
                <button className="button"><NavLink to="/">Take me Home!</NavLink></button>
            </div>
        </div>
    );
        
}

export default Error404Page;