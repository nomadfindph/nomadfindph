import React, { Component } from "react";
import './navbar.css';

export default class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav-ul">
                        <li>
                            <div className="nav-td">
                                <a href="#"><img id="nav-logo" alt="nomadph-logo" src="img/logo.png" /></a>
                            </div>
                        </li>
                        <li>
                            <div className="nav-td">
                                <a className="nav-link white-link right-line" href="#">Sign In</a>
                            </div>
                            <div className="nav-td">
                                <a className="nav-link white-link landlord-sign" href="#">Become a Landlord</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}