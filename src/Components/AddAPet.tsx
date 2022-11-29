import React from 'react';
import Button from "./Button.js";

interface petData {
    name: string;
    type: string;
    breed: string;
    weight: string;
    age: string;
}

let name = "";
let type = "";
let breed = "";
let weight = "";
let age = "";

function AddAPet({setPetData}) {

    return (
        <div id='AddAPet-div'>
            <h1>Register Your Pet Here:</h1>
            <p>Name:</p>
            <input type="text" id="name-input" onChange={(e) => {name = e.target.value}}></input>
            <p>Type of Pet:</p>
            <input type="text" id="type-input" onChange={(e) => {type = e.target.value}}></input>
            <p>Breed:</p>
            <input type="text" id="breed-input" onChange={(e) => {breed = e.target.value}}></input>
            <p>Weight:</p>
            <input type="text" id="weight-input" onChange={(e) => {weight = e.target.value}}></input>
            <p>Age:</p>
            <input type="text" id="age-input" onChange={(e) => {age = e.target.value}}></input>

            <div>
                <Button text={"Register Pet"}
                className={"funcButton"}/>
            </div>
        </div>
    );
};
export default AddAPet;