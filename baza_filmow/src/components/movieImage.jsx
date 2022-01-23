import React from 'react';
import "../App.css"

const MovieImage = (props) => {


    return (
        <div className='movieImageDetailsContainer'>
            <img className='movieImageDetails' src={props.imageSrc}/>
        </div>
    )
};


export default MovieImage;
