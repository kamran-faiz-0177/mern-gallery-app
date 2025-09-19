import React, { useEffect, useState } from 'react'
import url from '../utensils';

const Gallery = () => {
    const [image, setImage] = useState([]);

    const handleFetchImage = async () => {
        try {
            const api_url = `${url}/api/gallery/fetch`;
            const response = await fetch(api_url);
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                console.log(message);
                setImage(imageList);
            } else {
                console.log(message, error);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
      handleFetchImage();
    },[])

    return (
        <div>Gallery</div>
    )
}

export default Gallery