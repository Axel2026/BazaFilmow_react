import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {ChakraProvider} from "@chakra-ui/react";
import Carousel from "./carousel";
import NavbarLogo from "./navbarLogo";
import HeroImage from "./heroImage";
const MainPage = () => {

    return (
        <div id="mainPage">
            <ChakraProvider>
                <NavbarLogo/>
                <HeroImage/>
                <Carousel/>
            </ChakraProvider>
        </div>
    )
};
export default MainPage;
