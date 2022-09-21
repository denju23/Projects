import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    let navigate = useNavigate();
    const [chagepass, setPass] = useState(
        {
            user_id: '',
            opass: '',
            npass: '',
            cpass: ''
        }
    )

    const handleChange = (event) => {
        setPass({ ...chagepass, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        if (localStorage.getItem('Email')) {
            alert('Password Changed successfully')
            localStorage.setItem('Email', JSON.stringify(chagepass.user_id));
            localStorage.setItem('Password', JSON.stringify(chagepass.cpass));
            navigate('/SignIn')
        }
        event.preventDefault()
    }
    return (
        <>
            <h1 style={{ textAlign: 'center', color: 'blue' }}> Change Password </h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name='user_id' required onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicOldPassword">
                    <Form.Label> Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='opass' required="" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNewPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='npass' required="" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='cpass' required="" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ChangePassword;