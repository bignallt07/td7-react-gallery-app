import React, {Component} from 'react';
import './index.css';
import config from './config.js';

// Import Components
import Nav from './Components/Nav';
import Search from './Components/Search';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        <div className="photo-container">
          <h2>Results</h2>
            <PhotoContainer />
        </div>
      </div>
    );
  }
  
}

export default App;
