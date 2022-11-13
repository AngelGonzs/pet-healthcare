import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, NavLink, NavMenu } from "../Components/NavbarElements";
  
const Profile = ({userData}) => {
  return (
    <div>
      {userData.userName !== "" ? (
        <div>
          <h1>Tu profile</h1>
          <ls>
            <li>Tu nombre es {userData.userName}</li>
            <li>Tu gmail es {userData.email}</li>
            <li>Tu password es {userData.password}</li>
          </ls>
        </ div>
        
        ) : (
          <div>
            <h1>Que esperas registrate ya!</h1>
            <p>
              <Link to ="/logInPage" >Hazlo aqui!</Link>
            </p>
          </div>
        )}
      
    </div>
  );
};
  
export default Profile;