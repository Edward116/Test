import React from "react";
import {Route} from "react-router-dom";
import Navbar from "../../NavBar/NavBar";
import Profile from "./ProfilePage/Profile";
import Dashboard from "./DashboardPage/Dashboard";
import {UserContainer} from "./UsersPage/UsersContainer";

const GlobalPage = () => {
    return(
        <div>
            <Navbar/>
            <div>
                <Route exact path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/dashboard'
                       render={() => <Dashboard/>}/>
                <Route path='/users'
                       render={() => <UserContainer/>}/>
            </div>
        </div>
    )
}

export default GlobalPage