import React, { useContext, useEffect } from 'react'
import itemContext from '../context/items/itemContext'
import ProductItem from './ProductItem'

const ItemsList = () => {

    const context = useContext(itemContext);
    const { items } = context;
    

    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Color</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((product)=>{
                        return <ProductItem key={product.id} product={product} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ItemsList