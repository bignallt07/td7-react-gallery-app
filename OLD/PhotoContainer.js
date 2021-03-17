import React, { Component } from 'react';

import axios from 'axios';
import apiKey from '../config.js';

// Imported Components
// import Photo from './Photo';
// import NotFound from './NotFound';

class PhotoContainer extends Component {

    // const results = props.url;
    // let images;

    // if (results.length > 0) {
    //     images = results.map(image => <Photo image={image} key={image.id} />);
    // }

    render() {
        
        console.log(this.props.item)
        return (
            <ul>
                {/* {images} */}
            </ul>
        );
    }

}

export default PhotoContainer;

// componentDidMount() {
  //   this.imageSearch();
  // }

  // onSearchChange = e => {
  //   console.log(e.target.value);
  //   this.setState({ searchValue: e.target.value });
  // }



//   imageSearch = (query = this.state.searchValue) => {
//     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
//       .then(response => {
//         this.setState( prevState => ({
//           images: response.data.photos.photo
//         }));
//       })
//       console.log(this.state)
//     }

//     handleSubmit = e => {
//       e.preventDefault();
//       const item = e.target.firstElementChild.value;
//       e.currentTarget.reset();
//       this.setState({ 
//         searchValue: item
//       })
//       this.imageSearch(item);
//     }