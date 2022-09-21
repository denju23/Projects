import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from 'bootstrap';

function ForgotPassword() {
    const notify = () => toast("Password send on Email Id!");
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: ''
    })

    const handleChange = (event) => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: [event.target.value] })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       let ans=  localStorage.getItem('Email');
        navigate('/SignIn')
        alert(`Password send on Your Register Email Id : ${ans}`)
    }

    return (
        <React.Fragment>
            <br /><br />
            <h1 style={{ textAlign: 'center' }}>Forgot Password</h1>
            <br /><br />
            <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                <Form onSubmit={handleSubmit} method='post'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required name='email' onChange={handleChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Forgot Password
                    </Button>
                </Form>
            </div>
            <br />
            <p style={{ textAlign: 'center' }}>Not a Registered User? <Link to='/Signup'>Sign-Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/ForgotPass'>Forgot Password?</Link></p><br /><br /><br />
        </React.Fragment>
    )
}

export default ForgotPassword;