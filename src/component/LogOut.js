import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const navigate = useNavigate();
    localStorage.clear();
    alert('Succesfully Logout');
    navigate('/SignIn')

    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center', color: 'blue' }}> Log Out</h1>
           
        </React.Fragment>
    )
}

export default LogOut;