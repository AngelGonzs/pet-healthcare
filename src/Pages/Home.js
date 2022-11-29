import React from 'react';
import logo from '../Images/petHealthLogo.png'
import {parent} from "./Home.css"
// the <br> tag is the html equivalent of a \n
function Home() {
    return (
      <div class="parent" align="center">
        <h1> Welcome to</h1>
        <img src= "https://i.postimg.cc/brKxWVGs/Fixed-Logo-removebg-preview.png"  />
        {/* <button align="center"><img src="https://i.postimg.cc/nVgvxh6C/Bone-Clear.png" /></button>
        <img align="left" src="https://i.postimg.cc/nVgvxh6C/Bone-Clear.png" /> */}
        <td><a href="/events"><img align="center" src="https://i.postimg.cc/3rtNpdz8/Bone-Clear.png" /></a></td>
        <table align="left">
          <tr> <td> <h1> About Us </h1>   </td> </tr>
          <tr> <td> <h3>Events for Pets is a web application designed to showcase all veterinarian
         events <br></br> and allow the users to register for them through our app! We really do care about
         <br></br>our animal friends, so we designed this for fellow animal lovers like us! ♡ </h3> </td> </tr> 
        </table>
        <img src= "https://i.postimg.cc/RV8Ywh64/paw-prints-removebg-preview.png"  />
      </div>
      
    );
}

export default Home;