import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center',color:'red'  }} >Error 404 Found</h1>
                <Button variant="danger"><Link className='link' to={'/Home'}> Go Home</Link></Button>
            </>
        );
    }
}

export default Error;