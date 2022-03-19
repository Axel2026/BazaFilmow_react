import React, {useState} from 'react';
import {Button, ChakraProvider, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import bazaFilmowIcon from '../images/bazaFilmowIconName.png';

const SignUp = () => {

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)
    const history = useHistory();

    const HandleChangeRoute = () => {
        history.push('/login');
        window.location.reload();
    };

    const HandleSubmit = (event) => {
        event.preventDefault()
        if (Check()) {
            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/user/create',
                data: {
                    name: nickname,
                    email: email,
                    password: password,
                }
            }).then((response) => {
                console.log(response.data)
                HandleChangeRoute()
            }).catch((error) => {
                alert("Podany email lub login są już używane!")
                console.log(error);
            })
        }
    }


    const Check = () => {
        if ((document.getElementById('password1').value === document.getElementById('password2').value)
            && (document.getElementById('password1').value.trim() !== '')) {
            document.getElementById('password1').style.borderColor = '';
            document.getElementById('password2').style.borderColor = '';
            if (document.getElementById('nickname').value.trim() !== '') {
                document.getElementById('nickname').style.borderColor = '';
                if (document.getElementById('email').value.trim() !== '') {
                    document.getElementById('email').style.borderColor = '';
                    return true;
                } else {
                    document.getElementById('email').style.borderColor = '#FF0000';
                    return false;
                }
            } else {
                document.getElementById('nickname').style.borderColor = '#FF0000';
                return false;
            }
        } else {
            document.getElementById('password1').style.borderColor = '#FF0000';
            document.getElementById('password2').style.borderColor = '#FF0000';
            console.log(document.getElementById('password1').style.borderColor)
            return false;
        }
    };

    return (
        <div>
            <div id="logoSignUp">
                <img className="bazaFilmowIcon" src={bazaFilmowIcon} alt="bazaFilmowIcon"/>
            </div>
            <div id="signUpBackground">
                <div id="signForm">
                    <form id="formSign" onSubmit={HandleSubmit}>
                        <ChakraProvider>
                            <Input className="formInput" placeholder="Nickname" id="nickname" size="lg"
                                   onChange={e => setNickname(e.target.value)}/><br/><br/>
                            <Input className="formInput" placeholder="Email" id="email" size="lg"
                                   onChange={e => setEmail(e.currentTarget.value)}/><br/><br/>
                            <InputGroup size="md">
                                <Input id="password1"
                                       className="formInput"
                                       pr="4.5rem"
                                       size="lg"
                                       type={show ? "text" : "password"}
                                       placeholder="Password"
                                       onChange={e => setPassword(e.target.value)}
                                /><br/><br/><br/>
                                <InputRightElement width="5rem" height="3rem">
                                    <Button h="1.75rem" size="sm" onClick={handleClick} color="black">
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Input className="formInput"
                                   id="password2"
                                   pr="4.5rem"
                                   size="lg"
                                   type={show ? "text" : "password"}
                                   placeholder="Repeat password"
                            /><br/><br/>
                            <Button id="createAccountButton" type="submit">Create an
                                account</Button>&nbsp;&nbsp;
                            <Button id="haveAccountButton" onClick={HandleChangeRoute}>Already have an account? Log
                                In!</Button>
                        </ChakraProvider>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;
