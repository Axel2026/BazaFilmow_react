import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {ChakraProvider} from "@chakra-ui/react";
import NavbarLogo from "./navbarLogo";
import HeroImage from "./heroImage";
import MovieList from "./movieList";
import Footer from "./footer";
const MainPage = () => {
    return (
        <div id="mainPage">
            <ChakraProvider>
                <NavbarLogo main={true}/>
                <HeroImage/>
                <MovieList/>
                <Footer/>
            </ChakraProvider>
        </div>
    )
};
export default MainPage;
