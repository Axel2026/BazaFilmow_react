import OwlCarousel from "react-owl-carousel";
import dark_knight from "../images/dark_knight.jpg";
import Green_mile from "../images/Green_mile.jpg";
import hateful_eight from "../images/hateful_eight.jpg";
import Inglorious_basterds from "../images/Inglorious_basterds.jpg";
import pulp_fiction from "../images/pulp_fiction.jpg";
import reservoir_dogs from "../images/reservoir_dogs.jpg";
import rick_and_morty from "../images/rick_and_morty.jpg";
import Shawshank from "../images/Shawshank.jpg";
import sherlock from "../images/sherlock.jpg";
import React from "react";

const Carousel = () => {

    return (
        <div id="carousel">
            <p id="mostViewed">Najczęściej wybierane</p>
            <OwlCarousel className='owl-theme' loop margin={1} nav items={5}>
                <div className='item'>
                    <img className="carouselImage" src={dark_knight} alt="dark_knight"/>
                </div>
                <div className='item'>
                    <img className="carouselImage" src={Green_mile} alt="Green_mile"/>
                </div>
                <div className='item'>
                    <img className="carouselImage" src={hateful_eight} alt="hateful_eight"/>
                </div>
                <div className='item'>
                    <img className="carouselImage" src={Inglorious_basterds} alt="Inglorious_basterds"/>
                </div>
                <div className='item'>
                    <img className="carouselImage" src={pulp_fiction} alt="pulp_fiction"/>
                </div>
                <div className='item'>
                    <img className="carouselImage" src={reservoir_dogs} alt="reservoir_dogs"/>
                </div>
                <div className='item'>
                    <img className="carouselImage" src={rick_and_morty} alt="rick_and_morty"/>
                </div>
                <div className='item'>
                    <img className="carouselImage" src={Shawshank} alt="Shawshank"/>
                </div>
                <div className='item'>
                    <img className="carouselImage" src={sherlock} alt="sherlock"/>
                </div>
            </OwlCarousel>
        </div>
    )
};
export default Carousel;
