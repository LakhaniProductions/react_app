import React, {Component} from 'react';
import Form from './Form';
import Nav from './Nav';
import apiKey from './config';
import axios from 'axios';
import PhotoContainer from './PhotoContainer';


class App extends Component {
  
  state = {
    images: []
  };

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render(){
    return (
      <div>
        <Form />
        <Nav />
        <PhotoContainer data={this.state.images}/>
      </div>
    );
  }
}



export default App;

