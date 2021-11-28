import * as React from "react"
import Login from "./components/login"
import MainPage from "./components/mainPage";
import SignUp from "./components/signUp";
import {Switch, Route, Redirect} from "react-router-dom";
//import Profile from "./components/profile";
import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function App() {

    let $auth = {
        isLoggedIn: function () {
            if (false) {
                return false;
            } else {
                return true;
            }
        }
    };

    return (
        <div className="mainBackground">
            <div>
                <Route path="/" exact component={MainPage}/>
                {/*<Route path="/profile" exact component={Profile}/>*/}


                <Route exact path="/" render={() => (
                    $auth.isLoggedIn() ? (
                        <Redirect to="/"/>
                    ) : (
                        <Redirect to="/login"/>
                    )
                )}/>
            </div>

            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/signUp" exact component={SignUp}/>
            </Switch>
        </div>
    )
}

export default App;
