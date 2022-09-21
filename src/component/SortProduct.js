import React from 'react';
import axios from 'axios';

class SortProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: [],
        };
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products?sort=desc')
            .then(res => {
                const ans = res.data;
                this.setState({ sort: ans });
                console.log(ans)
            })
    }


    render() {
        return (
            <>
                <h3>Sort Product By Descending Order</h3>
                {this.state.sort.map(response => {
                    return (
                        <div key={response.id}>
                            <h1>{response.id}</h1>
                            <img src={response.image} height={100} width={100} />
                            <h3>{response.title}</h3>
                            <p><b>Description :</b> {response.description}</p>
                            <p><b>Description With Slice Method:</b> {response.description.slice(0, 25)}</p>
                            <button><a href={`/products/${response.id}`}> View Product Details</a></button>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default SortProduct;