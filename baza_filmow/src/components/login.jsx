import {Button, ChakraProvider, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import React, {useState} from 'react';
import "../App.css"
import {useHistory} from "react-router-dom";
import bazaFilmowIcon from "../images/bazaFilmowIconName.png";

const axios = require('axios');

const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)
    const history = useHistory();

    const HandleChangeRoute = () => {
        history.push('/');
    };

    const SignUpButton = () => {
        history.push('/signUp');
        window.location.reload();
    };


    const Validate = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: login,
                password: password
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            HandleChangeRoute();
        }).catch((error) => {
            if (login.trim() === '') {
                alert("Login jest wymagany!")
            } else if (password.trim() === '') {
                alert("Hasło jest wymagany!")
            }else{
                alert("Podane dane są nieprawidłowe!")
            }
            console.log(error);
        });
    };

    const HandleChangeLogin = (event) => {
        setLogin(event.currentTarget.value);
    };

    const HandleChangePass = (event) => {
        setPassword(event.currentTarget.value);
    };

    return (
        <div>
            <div id="logoSignUp">
                <img className="bazaFilmowIcon" src={bazaFilmowIcon} alt="bazaFilmowIcon"/>
            </div>
            <div id="loginBackground">
                <form onSubmit={Validate}>
                    <ChakraProvider>
                        <Input className="formInput" placeholder="Login" size="lg" onChange={HandleChangeLogin}/><br/><br/>
                        <InputGroup size="md">
                            <Input
                                className="formInput"
                                pr="4.5rem"
                                size="lg"
                                type={show ? "text" : "password"}
                                placeholder="Enter password"
                                onChange={HandleChangePass}
                            />
                            <InputRightElement width="5rem" height="3rem">
                                <Button h="1.75rem" size="sm" color="black" onClick={handleClick}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <br/>
                        <Button id="loginButton" type="submit">Log in</Button>&nbsp;&nbsp;
                        <Button id="goToSignUpButton" onClick={SignUpButton}>Sign up</Button>
                    </ChakraProvider>
                </form>
            </div>
        </div>
    )
};


/*const mapStateToProps = state => ({
    userNickname: state.userNickname
});*/
export default Login;
