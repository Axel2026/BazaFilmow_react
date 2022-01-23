import React from "react";
import bazaFilmowIconGray from "../images/bazaFilmowIconGray.png";
import movieIcon from "../images/movieIcon.png";
import logoutIcon from "../images/logoutIcon.png";
import {useHistory} from "react-router-dom";

const NavbarLogo = (props) => {

    const history = useHistory();
    const gotoMainPage = () => {
        history.push('/');
    };

    const gotoAdd = () => {
        history.push('/add');
    };

    if(props.main){
        return (
            <div id="navbar">
                <div id="mainNavbar">
                    <div id="logoNavbar">
                        <img className="bazaFilmowIconNavbar" src={bazaFilmowIconGray} alt="bazaFilmowIconGray"/>
                    </div>
                    <img className="movieIconNavbar" src={movieIcon} alt="movieIcon" onClick={() => gotoAdd()}/>
                    <img className="logoutIconNavbar" src={logoutIcon} alt="logoutIcon"/>
                </div>
            </div>
        )
    }else{
        return (
            <div id="navbar">
                <div id="mainNavbar">
                    <img className="bazaFilmowIconNavbarNoMain" src={bazaFilmowIconGray} alt="bazaFilmowIconGray" onClick={() => gotoMainPage()}/>
                    <img className="logoutIconNavbarNoMain" src={logoutIcon} alt="logoutIcon"/>
                    <img className="movieIconNavbarNoMain" src={movieIcon} alt="movieIcon" onClick={() => gotoAdd()}/>
                </div>
            </div>
        )
    }
};
export default NavbarLogo;
