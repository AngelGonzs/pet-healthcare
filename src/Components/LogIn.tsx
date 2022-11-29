import React from 'react'
import './LogIn.css'
import Button from "./Button.js";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

interface UsersData {
    userName: string;
    email: string;
    password: string;
}

let username = "";
let password = "";
let found = false;
  
function LogIn({setUserData}){

    

    function userExists(){
        fetch("http://localhost:8000")
                .then((response) => response.json())
                .then((payload: UsersData[]) => {

                console.log(payload);
                found = false;
                {payload.map((row) => {
                    if(row.userName === username && row.password === password){
                        window.alert("Welcome")
                        found = true;
                        setUserData(row);
                    }
                })}
                if(!found) window.alert("Please try again");
                })
    }

    return (
        <div id='logIn-div'>

            <p >Username</p>
            <input type="text" id="userName-input" onChange={(e) => {username = e.target.value}}></input>
            <p >Password</p>
            <input type="text" id="password-input" onChange={(e) => {password = e.target.value}}></input>

            <div>
                <Button text={"Log in"}
                className={"funcButton"}
                func={userExists} />

                <p>
                    <Link to="/signInPage">
                        Don't have an account yet? Sign up here!
                    </Link>
                </p>
            </div>

        </div>
    );
}

export default LogIn;