import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import GalleryItem from '../GalleryItem/galleryItem';
import GalleryList from '../GalleryList/galleryList';

function App() {

  const [pictureArray, setPictureArray] = useState();

  useEffect(() => {
    getPicture();
  }, []);

  function getPicture() {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setPictureArray(response.data);
      console.log('Got pictures from server', response);
    }).catch((error) => {
      console.log('Unable to get pictures from server', error);
      alert('Unable to get pictures from server. Try again.');
    });
    return (pictureArray)
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        {// prevents GalleryList from running until picture data is received from the server
        pictureArray ?
        // GalleryList sets up page elements where pictures will be displayed
        <GalleryList pictureArray={pictureArray, getPicture()} />
        :
          // Empty div to render until pictureArray is filled
          <div></div>
        }
        </div>
      );
      //   <p>Gallery goes here</p>
      //   <img src="images/goat_small.jpg"/>
      // </div>
    
}

export default App;
