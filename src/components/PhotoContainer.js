import React from 'react';
import Photo from './Photo';
import Lost from './Lost';

const PhotoContainer = props => {
  const results = props.data;
  const loading =props.loading;
  let images;
  if(results.length > 0) {
    images = results.map(image => <Photo server={image.server} id={image.id} secret={image.secret} title={image.title} key={image.id.toString()} /> );
  } else if (loading) {
    images= <p>Loading...</p>
  }else {
    images = <Lost />
  }
 

  return (
   
    <div className="photo-container">
      <h2>{props.title}</h2>
      <ul>
        {images}
      </ul>
    </div>
  );
}

export default PhotoContainer;


 