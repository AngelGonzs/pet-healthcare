import React, { useState } from "react";
import { Link } from "react-router-dom";
import './profile.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, NavLink, NavMenu } from "../Components/NavbarElements";
  
const Profile = ({userData}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      {userData.userName != "" ? (
        
        <div className="userInfo">
          <h1>Profile Picture:</h1>
        {selectedImage && (
          <div>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={()=>setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <br />

        <br /> 
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
          <h1>Profile Information:</h1>
          <ls>
            <li>Username: {userData.userName}</li>
            <li>Email: {userData.userName}</li>
          </ls>
        </ div>
        
        ) : (
          <div>
            <h1>Log into your account!</h1>
            <p>
              <Link to ="/logInPage" >Click here to log in!</Link>
            </p>
          </div>
        )}
      
    </div>
  );
};
  
export default Profile;