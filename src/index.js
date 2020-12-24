import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import PhotoContainer from './components/PhotoContainer';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
 
    <App />

          <Route path="/cats" render={() => <PhotoContainer data={this.state.cats} title= 'Cat Images'/>} />
          <Route path="/dogs" render={() => <PhotoContainer data={this.state.dogs} title= 'Dog Images'/>} />
          <Route path="/computers" render={() => <PhotoContainer data={this.state.computers} title= 'Computers'/>} />
          <Route path="/:query" render={() => <PhotoContainer data={this.state.images} title= 'Computers'/>} />
          
         
          
          {
            (this.state.loading)
            ?<p>Loading...</p>
            : <Route exact path="/" render={() => <PhotoContainer data={this.state.images} title= 'Supra Images'/>} />
          }
          

  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
