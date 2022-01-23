import React from 'react';
import "../App.css"

const MovieDetails = (props) => {

    return (
        <div>
            <div className="movieTitleDetails">{props.title}</div>
            <div className="movieDescriptionDetails">{props.desc}</div>
        </div>
    )
};


export default MovieDetails;
