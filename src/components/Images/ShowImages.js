import React from 'react';

const ShowImages = (props) => {
    const {picture} = props.newImages;

    const ImageStyle={
        borderRadius:"50%"
    }

    return (
        <div>
            <img style={ImageStyle} src={picture.large} alt=""/>
        </div>
    );
};

export default ShowImages;