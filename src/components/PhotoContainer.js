import React from 'react';
import Photo from './Photo';
import Lost from './Lost';

const PhotoContainer = props => {
  const results = props.data;
  

  let images = results.map(image => 
    <Photo server={image.server} id={image.id} secret={image.secret} title={image.title} key={image.id.toString()} />
  );

  return (
   
    <div className="photo-container">
      <h2>{props.title}</h2>
      <ul>

        {images}
        <Lost />
      </ul>
    </div>
  );
}

export default PhotoContainer;


 