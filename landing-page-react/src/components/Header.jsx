import React from "react";

function Header() {
    return (
    <div>
    <nav  className="navbar navbar-dark bg-dark">
            <table>
                <tr>
                    <td className="nav-td">
                        <a href="/"><img id="nav-logo" src={require('./images/logo.png')} alt="logo-img" srcset=""/></a>
                    </td>
                    <td className="nav-td">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search a location..." aria-label="Search"/>
                        </form>
                    </td>
                    <td className="nav-td">
                        <a className="nav-link white-link active right-line" aria-current="page" href="/">About Us</a>
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
        <hr class="hero-hr"/>
        <div class="hero-image">
            <p class="intro full-opacity">
                We value your safety and comfort. <br/>
                Find your second home with us.
            </p>
            <button type="button full-opacity" class="btn find-a-place btn-outline-light">Find a Place.</button>
        </div>
    </div>
    )
}

export default Header;