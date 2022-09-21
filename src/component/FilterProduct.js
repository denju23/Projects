import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import array from './array';


const FilterProduct = () => {

    const [items, setItems] = useState(array);
    const filterResult = (catItem) => {
        const result = array.filter((curData) => {
            return curData.category === catItem
        })
        setItems(result);
        // console.log(result);
    }

    return (
        <>
            <h3 style={{ textAlign: 'center',color:'blue'}}>FILTER PRODUCTS</h3>
            <Button className='m-4' onClick={() => setItems(array)}>All Products</Button>
            <Button className='m-4' onClick={() => filterResult("men's clothing")}>Men's</Button>
            <Button className='m-4' onClick={() => filterResult("women's clothing")}>Women's</Button>
            <Button className='m-4' onClick={() => filterResult('jewelery')}>Jewelery</Button>
            <Button className='m-4' onClick={() => filterResult('electronics')}>Electronics</Button>
            {items.map((values) => {
                const { id, image, title, price, description,
                } = values
                return (
                    <div key={id}>
                        <h1>{id}</h1>
                        <img src={image} height={200} width={100} />
                        <h3>{values.category}</h3>
                        <h3>Product Name: {title}</h3>
                        <h4>Rs.{price}</h4>
                        <p>Description : {description}</p>
                        <p>Rating  {values.rating.rate} ({values.rating.count})</p>
                        <Button variant="info"><Link className='link' to={`/Products/${id}`}> View Product Details</Link> </Button>
                    </div>
                )
            })}
        </>
    );

}

export default FilterProduct;