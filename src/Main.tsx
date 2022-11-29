import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.js";
import Home from "./Pages/Home.js";
import SignInPage from "./Pages/SignInPage.js";
import NoPage from "./Pages/NoPage.js";
import LogInPage from './Pages/LogInPage.js';
import Profile from './Pages/profile';
import RegPets from './Pages/regPets';
import {useState} from 'react'
import './Main.css';
import Events from './Pages/events';
import AddAPet from './Components/AddAPet.tsx'

interface UserData {
    userName: string;
    email: string;
    password: string;
}

function Main(){

  const [userData, setUserData] = useState<UserData>({userName:"", email:"", password:""} as UserData);

  return (
  
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="regPets" element={<RegPets />} />
            <Route path="addAPet" element={<AddAPet />} />
            <Route path="profile" element={<Profile userData={userData} />} />
            <Route path="signInPage" element={<SignInPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="logInPage" element={<LogInPage setUserData={setUserData}/>} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );


    
}

export default Main;