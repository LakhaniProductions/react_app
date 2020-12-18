import React from 'react';
import Photo from './Photo';
import Lost from './Lost';

const PhotoContainer = props => {
  const results = props.data;

  let photos = results.map(photo =>
    <Photo server={photo.photo.server}/>
  );

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>

        <Photo />
        <Lost />
      </ul>
    </div>
  );
}

export default PhotoContainer;


 