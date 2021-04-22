import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import './NavBar.css'

function Navbar() {
    const [isAdmin, setIsAdmin] = useState(true)
    const [name, setName] = useState('Edward')

    return (
        <nav>
            <div className="nav-wrapper grey">
                <span className={isAdmin ? 'admin' : null}>
                        <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"/>
                </span>
                <span>{name}</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                    {isAdmin && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>}
                    <li><NavLink to='/users'>Users</NavLink></li>
                    <li><a href="/login">LogOut</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;