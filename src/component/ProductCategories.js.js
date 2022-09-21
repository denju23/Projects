import axios from 'axios';
import React from 'react';

class ProductsCategories extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => {
                const ans = response.data;
                this.setState({ categories: [ans] });
                console.log(ans)
            })
    }
    render() {
        return (
            <React.Fragment>
            <h3 style={{ textAlign: 'center', color:'blue' }}>PRODUCTS CATEGORIES</h3>
                {this.state.categories.map(result => {
                    return (
                        <>
                            {result}
                           
                        </>
                    )
                })}
            </React.Fragment>
        );
    }
}

export default ProductsCategories;