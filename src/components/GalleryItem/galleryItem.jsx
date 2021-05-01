import { useState } from 'react';
import axios from 'axios';
// import './GalleryItem.css';

function GalleryItem (props) {
    // places imageData from props into a variable
    let imageData = props.imageData;

    // Hook to manage conditional on whether image or description is rendered
    const [click, setClick] = useState(true);
   
    // Function used to toggle between picture & description
    const toggle = () => setClick(!click);

    // Function to record number of clicks for like button
    const likeCounter = () => {
        console.log('Click', imageData.id);
        axios({
            method: 'PUT',
            url: `/gallery/like/${imageData.id}`,
        })
        .then((response) => {
            console.log('Increased likes for image', response);
        })
        .catch((error) => {
            console.log('Error increasing likes');
            alert('Error increasing likes');
        });
    };

    return (
        <>
        {/* div to load images or description */}
        <div className="imageBox" onClick={() => toggle()}>
            {/* Click hook to determine whether image or description should be rendered */}
            {click ? (
                <img src={imageData.path} alt={imageData.description}></img>
            ) : (
                <p>{imageData.description}</p>
            )}
        </div>
        {/* Conditional rendering to render likeCounter using proper plurality */}
        <div className="likeBox">
            {imageData.likes === 0 ? (
                <p>No one has loved this image yet.</p>
            ) : imageData.likes === 1 ? (
                <p>{imageData.likes} person loved this image!</p>
            ) : (
                <p>{imageData.likes} people loved this image!</p>
            )}
            {/* Calls likeCounter when like button is clicked */}
            <button onClick={() => likeCounter()}>Love it!</button>
        </div>
      </>
    );
}

export default GalleryItem;