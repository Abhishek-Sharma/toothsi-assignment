import React, { useState, useContext } from 'react'

import itemContext from '../context/items/itemContext'


const ProductItem = (props) => {
    const { product } = props;
    const [isChecked, setIsChecked] = useState(false);
    const [itemCount, setItemCount] = useState("");

    const context = useContext(itemContext);
    const { items, cart, addToCart, removeToCart } = context;


    const handleOnChange = (product) => {
        if (isChecked) {
            // console.log('remove')
            removeToCart(product,itemCount)
            

        } else {
            addToCart(product, itemCount)
            // console.log(cart)
        }
        setIsChecked(!isChecked);

    };

    const inputOnChange = (e) => {
        setItemCount(e.target.value)
        if(isChecked){
            console.log(itemCount)
            addToCart(product, e.target.value)
        }
        
    }


    // useEffect(()=>{},[cart])

    return (

        <tr>
            <th scope="row"><img src={product.img_url} alt="" width="60px" height="60px" /></th>
            <td>{product.name}</td>
            <td>{product.color}</td>
            <td className={product.in_stock==="in stock"?"text-success":"text-danger"}>{product.in_stock}</td>
            <td>{product.price}</td>
            <td>
                <div className="row">
                    <div className="col"><input type="number" id={product.id} value={itemCount} onChange={inputOnChange} /></div>
                    <div className="col"><img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" height="25px" /></div>
                    <div className='col'><input type="checkbox" id={product.id} value={itemCount} checked={isChecked} onClick={() => handleOnChange(product)} onChange={() => { }} />{isChecked ? "Remove" : "Add"}</div>
                </div>
            </td>
        </tr>


    )
}

export default ProductItem