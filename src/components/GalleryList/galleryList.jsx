// import './GalleryList.css'
import GalleryItem from '../GalleryItem/galleryItem'

function GalleryList(props) {
    // Assigns pictureArray from props to a variable
    let pictureArray = props.pictureArray;

    // Renders area for image cards to be loaded & divs for each card
    // Maps pictureArray to image cards & sends data to GalleryItem for each picture

    return (
        <div className='cardBox'>
            {pictureArray.map(imageData =>
                <div className='card' key={imageData.id}><GalleryItem imageData={imageData} /></div>
                )}
        </div>
    );
}

export default GalleryList;