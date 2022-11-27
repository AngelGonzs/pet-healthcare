import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, NavLink, NavMenu } from "../Components/NavbarElements";
  
const Profile = ({userData}) => {
  return (
    <div>
      {userData.userName !== "" ? (
        <div>
          <h1>Your profile</h1>
          <ls>
            <li>Your name is{userData.userName}</li>
            <li>Your email is {userData.email}</li>
            <li>Your password is {userData.password}</li>
          </ls>
        </ div>
        
        ) : (
          <div>
            <h1>Register Here Now!</h1>
            <p>
              <Link to ="/logInPage" >Click Here to Log In!</Link>
            </p>
          </div>
        )}
      
    </div>
  );
};
  
export default Profile;