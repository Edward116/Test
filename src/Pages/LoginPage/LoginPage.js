import React from "react";
import {Route} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";


const AuthPage = () => {
    return (
        <div>
            <Route exact path='/login'
                   render={() => <LoginForm/>}/>
            <Route path='/registration'
                   render={() => <RegistrationForm/>}/>
        </div>
    )
}

export default AuthPage