import React from "react";

function Header() {
  return (
    <div>
    <nav>
      <table>
        <tr>
          <td>
            <a href="/"><img id="nav-logo" src={require('./images/logo.png')} alt="logo-img" srcset=""/></a>
          </td>
        </tr>
      </table>
    </nav>
    </div>
    )
}

export default Header;