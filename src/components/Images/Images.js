import React, { useState, useEffect } from 'react';
import ShowImages from './ShowImages';

const Images = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results')
        .then(res => res.json())
        .then(data => setImages(data.results));
    }, [])

    return (
        <div>
            {
                images.map(images => (<ShowImages newImages={images}></ShowImages>))
            }
        </div>
    );
};

export default Images;