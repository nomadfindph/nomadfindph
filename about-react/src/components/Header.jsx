import React from "react";

function Header() {
    return (
    <div>
    <nav  className="navbar navbar-dark bg-dark">
            <table>
                <tr>
                    <td className="nav-logo-td">
                        <a href="/"><img id="nav-logo" src={require('./images/logo.png')} alt="logo-img" srcset=""/></a>
                    </td>
                    <td className="nav-td">
                        <a className="nav-link white-link right-line" href="/">Sign In</a> 
                    </td>
                    <td className="nav-td">
                        <a className="nav-link white-link landlord-sign" href="/">Become a Landlord</a> 
                    </td>
                </tr>
            </table>
        </nav>
    </div>
    )
}

export default Header;