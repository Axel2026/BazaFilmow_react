import * as React from "react"
import Login from "./components/login"
import MainPage from "./components/mainPage";
import SignUp from "./components/signUp";
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Add from "./components/add";
import Details from "./components/details";
import { isExpired } from "react-jwt";

export default function App() {

    return (
        <div className="mainBackground">
            <div>
                <Route path="/" exact component={MainPage}/>
            </div>

            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/signUp" exact component={SignUp}/>
                <Route path="/add"
                       render={() => {
                           if (isExpired(localStorage.getItem('token'))) {
                               alert("You have to log in to access this site!")
                               return <Redirect to="/" />;
                           }
                           return <Route path="/add" exact component={Add}/>;
                       }}/>
                <Route path="/details"
                       render={() => {
                           if (isExpired(localStorage.getItem('token'))) {
                               alert("You have to log in to access this site!")
                               return <Redirect to="/" />;
                           }
                           return <Route path="/details" exact component={Details}/>;
                       }}/>
            </Switch>
        </div>
    )
}
