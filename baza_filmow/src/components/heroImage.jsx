import React from "react";
import searchIcon from "../images/searchIcon.png";
import {Input} from "@chakra-ui/react";

const HeroImage = () => {

    return (
        <div id="heroImage">
            <img className="searchIconImageHero" src={searchIcon} alt="searchIcon"/>
            <Input id="formInputMainHero" placeholder="Wyszukaj..." size="lg"/>
        </div>
    )
};
export default HeroImage;
