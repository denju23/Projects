import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';


const ViewCart = () => {

    const [cart, setCart] = useState([]);
    const uid = localStorage.getItem('id')

    useEffect(() => {
        const formdata = new FormData();
        formdata.append('userId', uid);
        // console.log(uid)
        // console.log(formdata)
        axios.post(`https://fakestoreapi.com/carts`, formdata)
            .then(resp => {
                var ans = resp.data
                setCart([ans])
                console.log(ans);

            })
    }, [])

    const delProduct = (id) => {
        
        const formdata = new FormData();
        formdata.append('id', id);
        axios.post(`https://fakestoreapi.com/carts/user/${id}`, formdata)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    alert('Item Successfully Delited From Your cart ')
                }
            }).catch(function (err) {

                console.log(err);
                alert('Error in Deliting Item');
            });
    }

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Cart Id.</th>
                        <th>Remove Item</th>
                    </tr>
                </thead>

                {cart.map(response => {
                    return (
                        <tbody>
                            <tr>
                                <td>ID : {response.id}</td>
                                <td><button onClick={() => delProduct(response.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </>
    );
}

export default ViewCart;