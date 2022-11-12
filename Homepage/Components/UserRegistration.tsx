import React from 'react'
import './UserRegistration.css'
import {useState} from 'react'

interface UserData {
    name: string;
    age: string;
    email: string;
  }
  
function UserRegistration(nombre,apellido){

    function submitFormToNotion(){
        console.log("We are" + name + " " + age + " " + email);
        fetch("http://localhost:4000/submitFormToNotion", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            age: age,
            email: email,
        })
        }).then(response => response.json())
        .then(data => {
        console.log("Success ", data);
        }).catch((error) => {
        console.log("Error: ", error)
        })
    }

    function readFromNotion(){
        fetch("http://localhost:8000")
                .then((response) => response.json())
                .then((payload: UserData[]) => {
                console.log(payload);
                setList(payload);
                })
    }

    const [list, setList] = useState<UserData[]>([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className='mainDiv'>
            <h1>Testing</h1>

            
            <p >nombre</p>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)}></input>
            <p >Age</p>
            <input type="text" id="age" onChange={(e) => setAge(e.target.value)}></input>
            <p >Email</p>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}></input>

            <div>
                <button type="reset" onClick={submitFormToNotion}>
                    Submit to notion
                </button>

                <button onClick={readFromNotion}
                    >Read notion
                </button>
            </div>

            <div>
                <ol>
                    {list.map((row,idx) =>{
                        return(
                            <li key={idx}>
                            <a>Name: {row.name}  Age: {row.age} Email: {row.email}</a>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    );
}

export default UserRegistration;