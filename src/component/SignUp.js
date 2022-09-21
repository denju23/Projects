import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function SignUp() {
    const nevigate = useNavigate()
    const [data, setData] = useState({
        name:'',
        email:'',
        password:''
    });

     const handleChange =(event)=>{
        setData({...data, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
       event.preventDefault()
            setData({name:'', email:'', password:''});
            localStorage.setItem('Name', JSON.stringify(data.name));
            localStorage.setItem('Email', JSON.stringify(data.email));
            localStorage.setItem('Password', JSON.stringify(data.password));
            console.log(data)  
            nevigate('/SignIn')    
    }

    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center', color: 'blue' }} >Sign Up Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label> User Name</Form.Label>
                    <Form.Control type="text" placeholder="User Name" name='name' onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>

        </React.Fragment>
    )
}

export default SignUp;