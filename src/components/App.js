import React, {Component} from 'react';

import Form from './Form';
import Nav from './Nav';
import apiKey from './config';
import axios from 'axios';



class App extends Component {
  
  state = {
    images: [],
    cats: [],
    dogs: [],
    computers: [],
    query: [],
    loading:true
  };

  componentDidMount() {
    this.performSearch()
    this.performSearch('cats')
    this.performSearch('dogs')
    this.performSearch('computers')
    //this.performSearch('UsersInput')
    
  }

  
  performSearch = (query = 'toyota supra') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === 'cats') {
          this.setState({
            cats: response.data.photos.photo,
            loading: false
          });
        } else if (query === 'dogs') {
          this.setState({
            dogs: response.data.photos.photo,
            loading: false
          });
        } else if (query === 'computers') {
          this.setState({
            computers: response.data.photos.photo,
            loading: false
          });
        } else {
          this.setState({
            images: response.data.photos.photo,
            loading: false
          });
        }
        
      }) 
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render(){
    return (
     
      
        <div className="container">
          <Form onSearch={this.performSearch}/>
          <Nav />
          
    
        </div>
      
    );
  }
}



export default App;

