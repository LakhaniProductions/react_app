import React, {Component} from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
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
    
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo
        });
      }) 
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  

  render(){
    return (
      <BrowserRouter>
        <div className="container">
          <Form onSearch={this.performSearch}/>
          <Nav />
          <Route path="/results" render={() => <PhotoContainer data={this.state.images} title= 'Results' /> } />

        </div>
      </BrowserRouter>


      // <div className="container">
      //   <Form />
      //   <Nav />
      //   <PhotoContainer data={this.state.images}/>
      // </div>
    );
  }
}



export default App;

