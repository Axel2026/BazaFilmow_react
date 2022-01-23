import React from 'react';
import "../App.css"

const MovieDetails = (props) => {
    console.log(props.title)

    return (
        <div>
            <div className="movieTitleDetails">{props.title}</div>
            <div className="movieDescriptionDetails">{props.desc}</div>
        </div>
    )
};


export default MovieDetails;
