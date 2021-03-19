import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import axios from 'axios';
import apiKey from './config.js';

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';


class App extends Component {

  state = {
    dogs: [],
    cats: [],
    computers: [],
    search: [],
  }

  // Loads the 3 routed pages data on page load
  componentDidMount() {
    this.imageSearch("cats");
    this.imageSearch("dogs");
    this.imageSearch("computers");
  }
  

 // Fetch the data for the 3 opening topics, send that data to the paths
  imageSearch = (query = "cats") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === "cats") {
          this.setState({
            cats: response.data.photos.photo,
          });
        } else if (query === "dogs") {
          this.setState({
            dogs: response.data.photos.photo,
          });
        } else if (query === "computers") {
          this.setState({
            computers: response.data.photos.photo,
          });
        // Not sure this is working
        } else {
          this.setState({
            search: response.data.photos.photo,
          });
        }
      });
  }


  render() {
    return (
      <BrowserRouter>
        <SearchForm search={this.imageSearch}/>
      
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={() => <PhotoContainer images={this.state.cats} />} />
            <Route path='/cats' component={() => <PhotoContainer images={this.state.cats} />}/> 
            <Route path='/dogs' component={() => <PhotoContainer images={this.state.dogs} />} /> 
            <Route path='/computers' component={() => <PhotoContainer images={this.state.computers} />} /> 
            <Route path='/search/:item' component={() => <PhotoContainer images={this.state.search} search={this.imageSearch} />} />
            <Route component={NotFound} /> 
          </Switch>
        </div>   
      </BrowserRouter> 
    );
  }
}
export default App;
