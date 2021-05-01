import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

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
            url: '/gallery/like/${imageData.id}',
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
        <div>
            {/* Click hook to determine whether image or description should be rendered */}
            {click ? (
            ) : (
                <p>{imageData.description}</p>
            )
            )}
        </div>
    )

}