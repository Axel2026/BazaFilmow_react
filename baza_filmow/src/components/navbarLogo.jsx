import React from "react";
import bazaFilmowIconGray from "../images/bazaFilmowIconGray.png";
import movieIcon from "../images/movieIcon.png";
import filterIcon from "../images/filterIcon.png";
import logoutIcon from "../images/logoutIcon.png";

const NavbarLogo = () => {

    return (
        <div id="navbar">
            <div id="mainNavbar">
                <div id="logoNavbar">
                    <img className="bazaFilmowIconNavbar" src={bazaFilmowIconGray} alt="bazaFilmowIconGray"/>
                </div>
                <img className="movieIconNavbar" src={movieIcon} alt="movieIcon"/>
                <img className="filterIconNavbar" src={filterIcon} alt="filterIcon"/>
                <img className="logoutIconNavbar" src={logoutIcon} alt="logoutIcon"/>
            </div>
        </div>
    )
};
export default NavbarLogo;
