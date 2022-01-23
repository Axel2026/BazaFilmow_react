import React from "react";
import bazaFilmowIconGray from "../images/bazaFilmowIconGray.png";
import movieIcon from "../images/movieIcon.png";
import logoutIcon from "../images/logoutIcon.png";
import loginIcon from "../images/loginIcon.png";
import {useHistory} from "react-router-dom";
import {isExpired, decodeToken} from "react-jwt";

const axios = require('axios');

const NavbarLogo = (props) => {

    const isNotLogged = isExpired(localStorage.getItem('token'));
    const user = decodeToken(localStorage.getItem('token'))

    const history = useHistory();
    const gotoMainPage = () => {
        history.push('/');
        window.location.reload()
    };

    const gotoAdd = () => {
        history.push('/add');
        window.location.reload()
    };

    const gotoLogin = () => {
        history.push('/login');
        window.location.reload()
    };

    const logout = () => {
        axios({
            method: 'delete',
            url: 'https://pr-movies.herokuapp.com/api/user/logout/:userId',
            data: {
                userId: user.userId
            }
        }).then((response) => {
            console.log("response.data" + response.data.deletedCount)
            if(response.data.deletedCount > 0){
                localStorage.removeItem('token')
                gotoMainPage()
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    if (props.main) {
        return (
            <div id="navbar">
                <div id="mainNavbar">
                    <div id="logoNavbar">
                        <img className="bazaFilmowIconNavbar" src={bazaFilmowIconGray} alt="bazaFilmowIconGray"/>
                    </div>
                    {isNotLogged ? (<div><img className="movieIconNavbar" src={loginIcon} alt="loginIcon"
                                              onClick={() => gotoLogin()}/></div>) : (<div>
                            <img className="movieIconNavbar" src={movieIcon} alt="movieIcon" onClick={() => gotoAdd()}/>
                            <img className="logoutIconNavbar" src={logoutIcon} alt="logoutIcon" onClick={() => logout()}/></div>
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div id="navbar">
                <div id="mainNavbar">
                    <img className="bazaFilmowIconNavbarNoMain" src={bazaFilmowIconGray} alt="bazaFilmowIconGray"
                         onClick={() => gotoMainPage()}/>
                    {isNotLogged ? (<div><img className="movieIconNavbarNoMain" src={loginIcon} alt="loginIcon"
                                              onClick={() => gotoLogin()}/></div>) : (<div>
                            <img className="movieIconNavbarNoMain" src={movieIcon} alt="movieIcon" onClick={() => gotoAdd()}/>
                            <img className="logoutIconNavbarNoMain" src={logoutIcon} alt="logoutIcon" onClick={() => logout()}/></div>
                    )}
                </div>
            </div>
        )
    }
};
export default NavbarLogo;
