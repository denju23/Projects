import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


function SignIn() {

    let nevigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
        errors: {}
    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const formvalidation = () => {
        const { email, password } = data;
        let isValid = true;
        const errors = {}//blank object
        if (!email) {
            errors.email = 'Enter email'
            isValid = false;
        }

        if (!password) {
            errors.password = 'Enter Password'
            isValid = false;
        }

        return isValid
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const isValid = formvalidation();
        if (localStorage.getItem('Email')) {
            nevigate('/Home')
        } else {
            alert('err')
        }
        setData({ username: '', password: '', errors: {} })
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>Sign In Form </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            <br />
            <p style={{ textAlign: 'center' }}>Not a Registered User? <Link to='/SignUp'>Sign-Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/ForgotPassword'>Forgot Password?</Link></p><br /><br /><br />
        </>
    )
}

export default SignIn;