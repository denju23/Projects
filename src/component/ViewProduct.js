import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const ViewProduct = () => {
    const { id } = useParams();
    let uid = localStorage.getItem('id')
    const [productdetails, setProductDetails] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(resp => {
                var ans = resp.data;
                setProductDetails([ans])
                console.log(ans)

            })
    }, [])

    const addCart = () => {
        const formdata = new FormData();
        formdata.append('userId', uid);
        formdata.append('id', id);
        formdata.append('products', productdetails[0].quantity);

        axios.post('https://fakestoreapi.com/carts',formdata)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    alert('Item Successfully Added To Your cart ')
                }
            }).catch(function (err) {

                console.log(err);
                alert('Error in Adding Item');
            });
    }
    return (
        <React.Fragment>

            {
                productdetails.map((myproduct) => {
                    const { id, image, title, price, category, description } = myproduct
                    return (<div key={id}>
                        <h1>{id}</h1>
                        <img src={image} height={200} width={150} />
                        <h3>{category}</h3>
                        <h3>{title}</h3>
                        <h3> Rs. {price}</h3>
                        <p>{description}</p>
                        <Button onClick={addCart}><a>Add to cart</a></Button>( Project Pending From Here)
                    </div>)
                })}<br /><br /><br />
        </React.Fragment>
    )

}

export default ViewProduct;

