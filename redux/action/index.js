// For Add Item to Cart
const addCart =(product)=>{
    return{
        type:'ADDITEM',
        payload:product
    }
}

// For Delete item from cart
const delCart= (product)=>{
    return{
        type:'DELITEM',
        payload:product
    }
}

export {addCart,delCart};

