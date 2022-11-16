import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

function Navbar() {
  return (
     <div class="navBar">
        <Nav className="navBar" align="center">
          <NavMenu>
            <NavLink to="/" activestyle="true">
              Home Page
            </NavLink>
            <NavLink to="/regPets" activestyle="true">
              Register a Pet
            </NavLink>
            <NavLink to="/" activestyle="true">
            <div className="logo">
              <img src= "https://i.postimg.cc/v8fHz4Bj/App-Logo-Clear.png" />
            </div>
            </NavLink>
            <NavLink to="/profile" activestyle="true">
              Profile
            </NavLink>
            <NavLink to="/logInPage" activestyle="true">
              LogIn
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
  );
}

export default Navbar;