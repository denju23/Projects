import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {

    const [product, setProduct] = useState([]);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const ans = response.data;
                setProduct(ans);
                console.log(ans)
            })

    }, [])

    return (
        <>

            <h1 style={{ textAlign: 'center', color: 'blue' }}>Home Page</h1>
            {product.map(resp => {
                return (
                    <>
                        <div className=''>
                            <Card className='m-4 grid' style={{ width: '18rem' }} key={resp.id}>
                                <Card.Img variant="top" src={resp.image} height={200} className='p-3 img' />
                                <Card.Body>
                                    <Card.Title>{resp.title}</Card.Title>
                                    <Card.Text>
                                        {resp.description.slice(0, 150)}
                                    </Card.Text>
                                    <Button variant="info"><Link className='link' to={`/Products/${resp.id}`}> View Product Details</Link> </Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </>
                )
            })}


        </>
    )
}

export default Home;