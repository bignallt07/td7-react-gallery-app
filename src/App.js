// Imports
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Axios and apiKey collected for functions
import axios from 'axios';
import apiKey from './config.js';

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import Error404Page from './Components/Error404Page';

/**
 * App Component
 * @returns - rendered App with routes
 */
class App extends Component {

  state = {
    elephant: [],
    giraffe: [],
    duck: [],
    search: [],
    searchTerm: "",
    loading: true
  }

  /**
   * ComponentDidMount Function - - React LifeCycle Method
   * @returns {updates State} - Runs the search on load for the 3 main channels
   */
  componentDidMount() {
    this.imageSearch("giraffe");
    this.imageSearch("elephant");
    this.imageSearch("duck");
  }
  
 /**
  * ImageSearch Function
  * Description: Fetches images from Flickr using the axios plugin
  * @param {string} query - keyword to search 
  * @returns {Array} - Updates State with 24 images, and updates the searched word query if necessary   
  */
  imageSearch = (query = "giraffe") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === "giraffe") {
          this.setState({
            giraffe: response.data.photos.photo,
          });
        } else if (query === "elephant") {
          this.setState({
            elephant: response.data.photos.photo,
          });
        } else if (query === "duck") {
          this.setState({
            duck: response.data.photos.photo,
          });
        // Not sure this is working
        } else {
          this.setState({
            search: response.data.photos.photo,
            searchTerm: query
          });
        }
        this.setState({
          loading: false
        })
      }).catch(error => {
        console.error("Error Fetching Images and Parsing Data", error);
      })
  }

  /**
   * UpdateLoadingState Function
   * Description: Updates this.state.loading to true which enables the loading indicator to work
   */
  updateLoadingState = (value) => {
    this.setState({
      loading: value
    })
  }

  /**
   * Render Function (Special Note)
   * Description: Renders the appropriate components to run the app and uses switch to load the appropriate componenet tested against the URL
   * @returns {render}
   */
  render() {
    return (
      <BrowserRouter>
        <SearchForm search={this.imageSearch} loading={this.updateLoadingState}/>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={() => <PhotoContainer images={this.state.giraffe} loading={this.state.loading} />} />
            <Route path='/giraffe' component={() => <PhotoContainer images={this.state.giraffe} loading={this.state.loading} />}/> 
            <Route path='/elephant' component={() => <PhotoContainer images={this.state.elephant} loading={this.state.loading} />} /> 
            <Route path='/duck' component={() => <PhotoContainer images={this.state.duck} loading={this.state.loading} />} /> 
            <Route path='/search/:item' component={() => <PhotoContainer images={this.state.search} search={this.imageSearch} term={this.state.searchTerm} loading={this.state.loading} />} />
            <Route component={Error404Page} /> 
          </Switch>
        </div>   
      </BrowserRouter> 
    );
  }
}

export default App;
