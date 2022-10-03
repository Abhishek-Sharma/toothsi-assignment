import React from 'react'

const CartItem = (props) => {
    const { product, quantity } = props;
    return (
        <tr>
            <th scope="row"><img src={product.img_url} alt="" height="60px" /></th>
            <td>{product.name}</td>
            <td>{product.color}</td>
            <td>{product.in_stock}</td>
            <td>{product.price}</td>
            <td>{quantity}</td>
        </tr>
    )
}

export default CartItem