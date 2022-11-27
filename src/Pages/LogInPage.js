import React from 'react';
import LogIn from '../Components/LogIn.tsx';



function LogInPage({setUserData}) {
    return (
        <div>
            <h1>Log In</h1>
            <LogIn setUserData={setUserData}/>
        </div>
        
    );
}

export default LogInPage;