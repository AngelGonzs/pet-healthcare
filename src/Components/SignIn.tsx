import React from 'react'
import './SignIn.css'
import Button from "./Button.js";

interface UsersData {
    userName: string;
    email: string;
    password: string;
}

let username = "";
let email = "";
let password = "";
let repeatedData = false;
  
function SignIn(){

    function submitFormToNotion(){
        console.log("    " + username + "    " + email + "    " + password);


            
            fetch("http://localhost:8000")
                .then((response) => response.json())
                .then((payload: UsersData[]) => {
                console.log(payload);
                {payload.map((row) => {if(row.userName === username || row.email === email) repeatedData = true;})}
                if(repeatedData) window.alert("Ya existe ese username o email");
                else{

                    fetch("http://localhost:4000/submitFormToNotion", {
                        method: "post",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            userName: username,
                            email: email,
                            password: password,
                        })
                        }).then(response => response.json())
                        .then(data => {
                        console.log("Success ", data);
                        }).catch((error) => {
                        console.log("Error: ", error)
                        })

                    

                }})
    }



    return (
        <div id='SignIn-div'>

            <p >userName</p>
            <input type="text" id="userName" onChange={(e) => username=(e.target.value)}></input>
            <p >email</p>
            <input type="text" id="email" onChange={(e) => email=(e.target.value)}></input>
            <p >password</p>
            <input type="text" id="password" onChange={(e) => password=(e.target.value)}></input>

            <div>
                <Button text={"Sign up"}
                className={"funcButton"}
                func={submitFormToNotion}/>
            </div>


        </div>
    );
}

export default SignIn;