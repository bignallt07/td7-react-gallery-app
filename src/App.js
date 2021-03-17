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
    search: []
  }

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
            cats: response.data.photos.photo
          });
        } else if (query === "dogs") {
          this.setState({
            dogs: response.data.photos.photo
          });
        } else if (query === "computers") {
          this.setState({
            computers: response.data.photos.photo
          });
        } else {
          this.setState({
            search: response.data.photos.photo
          });
          console.log(query)
          console.log(response.data.photos.photo);
        }
        
      });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const word = e.target.firstElementChild.value;
      console.log(word); 
      this.imageSearch(word);

      // SOMEHOW, WE HAVE TO REDIRECT THE FORM
      
  }


  render() {
    return (
      <BrowserRouter>
        <SearchForm search={this.handleSubmit}/>
      
        <Nav />
        <div className="container">
          <div className="photo-container">
            <h2>Results</h2>
            <ul>
              <Switch>
                <Route exact path="/" component={() => <PhotoContainer images={this.state.cats} />} />
                <Route path='/cats' component={() => <PhotoContainer images={this.state.cats} />}/> 
                <Route path='/dogs' component={() => <PhotoContainer images={this.state.dogs} />} /> 
                <Route path='/computers' component={() => <PhotoContainer images={this.state.computers} />} /> 
                <Route path='/search/:item' component={() => <PhotoContainer images={this.state.search} />} />
                <Route component={NotFound} /> 
              </Switch>
            </ul>
          </div>
        </div>   
      </BrowserRouter> 
    );
  }
}
export default App;


// I NEED TO CALL IMAGESEARCH - Maybe in content

// First Attempt

