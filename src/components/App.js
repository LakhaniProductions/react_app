import React, {Component} from 'react';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import Form from './Form';
import Nav from './Nav';
import apiKey from './config';
import axios from 'axios';
import PhotoContainer from './PhotoContainer';
import NotFound from'./NotFound';


class App extends Component {
  
  state = {
    images: [],
    query:[],
    cats: [],
    dogs: [],
    sharks: [],
    loading:true
  };

  componentDidMount() {
    
    this.performSearch()
    
    // let path= this.props.location.pathname;

    
    this.performSearch('cats')
    this.performSearch('dogs')
    this.performSearch('sharks')  

    // if(path.includes("search")){
    //   let newPath= path.replace(/[^\w\s]/gi, '').replace("search", '');
    //   return this.performSearch(newPath);
    // }
    
    
    
  }

  componentDidUpdate(prevProps) {

    //const {history} = this.props;
  
    // console.log(history);
    // console.log(this.props.location);
    let path= this.props.location.pathname;

    if (prevProps.location.pathname !== this.props.location.pathname) {

      if(path.includes("search")){
        let newPath= path.replace(/[^\w\s]/gi, '').replace("search", '');
        //history.push(newPath);
        return this.performSearch(newPath); 
      }
      
    }
    // const {history} = this.props;
    // const {match} = this.props;
    // console.log(match,history);
   
    
  }
 
  
  performSearch = (query= 'toyota supra') => {
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
        } else if (query === 'sharks') {
          this.setState({
            sharks: response.data.photos.photo,
            loading: false
          });
        } else if (query === 'toyota supra') {
          this.setState({
            images: response.data.photos.photo,
            loading: false
          });
        } else { 
          this.setState({
            query: response.data.photos.photo,
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
          
          <Switch>
              
              <Route exact path="/" render={() => <PhotoContainer data={this.state.images} title= 'Supra Images' />} />
              <Route path="/cats" render={() => <PhotoContainer data={this.state.cats} title= 'Cat Images' />} />
              <Route path="/dogs" render={() => <PhotoContainer data={this.state.dogs} title= 'Dog Images' />} />
              <Route path="/sharks" render={() => <PhotoContainer data={this.state.sharks} title= 'Shark Images' />} />
              <Route path="/toyota supra" render={() => <PhotoContainer data={this.state.images} title= 'Supra Images' />} />
              <Route path="/search/:query"  render={() => <PhotoContainer data={this.state.query} title= {this.props.location.pathname.replace(/[^\w\s]/gi, '').replace("search", '') + ' Images' } />} />
              {/* {
                (this.state.loading)
                ?<p>Loading...</p>
                :  <Route path="/search/:query"  render={() => <PhotoContainer data={this.state.query} title= {this.props.location.pathname.replace(/[^\w\s]/gi, '').replace("search", '') + ' Images' } />} />
              } */}
              <Route component={NotFound}/>
              
          </Switch>
          

        </div>
     
    );
  }
}



export default withRouter(App);

