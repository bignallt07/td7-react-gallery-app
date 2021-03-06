// imports
import React from 'react';

/**
 * NotFound Component 
 * @returns Message of no results
 */
const NotFound = () => {
    return (
        <ul>
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
        </ul>
    );
}

export default NotFound;