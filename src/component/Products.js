import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


class Products extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        };
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const ans = response.data;
                this.setState({ product: ans });
                console.log(ans)
            })
    }
    render() {
        return (
            <React.Fragment>
                <h3 style={{ textAlign: 'center',color:'blue'  }}>OUR PRODUCTS</h3>
                {this.state.product.map(response => {
                    return (
                        <div key={response.id}>
                            <h1>{response.id}</h1>
                            <img src={response.image} height={100} width={100} />
                            <h3> Product Name : {response.title}</h3>
                            <h3>Categories : {response.category}</h3>
                            <p> Product Price : {response.price}</p>
                            <p>Description : {response.description}</p>
                            <p>Rating : {response.rating.rate} ({response.rating.count})</p>
                            <Button  variant="info"><Link className='link' to={`/Products/${response.id}`}> View Product Details</Link> </Button>
                           
                        </div>
                    )
                })}


            </React.Fragment>

        );
    }
}

export default Products;