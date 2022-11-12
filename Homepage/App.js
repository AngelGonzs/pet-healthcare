import './App.css';
// import UserRegistration from './Components/UserRegistration.tsx'
import React from 'react';
import Navbar from './Components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Pages';
// import one from './Pages/home';
import RegPets from './Pages/regPets';
import Signin from './Pages/signin';
import Login from './Pages/profile'
import Profile from './Pages/profile';

// command "npm run build" for when you want it on the internet, not locally
// command "npm start" to run it locally
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/index' element={<Home/>} />
        <Route path='/regPets' element={<RegPets/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      
      <div className="App">
        

      <header className="App-Header">
        {/* <h1>Hello there</h1>
        <h3>General Kenobi...</h3> 
        <h6>oh my God</h6> */}
      </header>
    
    </div>
    </Router>
    
    
  );
}

export default App;
