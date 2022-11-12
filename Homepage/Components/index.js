import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return ( 
    <>
      <Nav align="center">
        <NavMenu>
          <NavLink to="/index" activeStyle>
            Home Page
          </NavLink>
          <NavLink to="/regPets" activeStyle>
            Register a Pet
          </NavLink>
          <NavLink to="/index" activeStyle>
          <div class="logo">
            <img src= "https://i.postimg.cc/v8fHz4Bj/App-Logo-Clear.png" />
          </div>
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/signin" activeStyle>
            Sign In
          </NavLink>
          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;