import React, { useContext } from 'react'
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import itemContext from '../context/items/itemContext';


const CartCheckoutPage = () => {

    const context = useContext(itemContext);
    const { cart } = context;
  return (
    <>
    <div className='container'>
        <h3>Cart Checkout</h3>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Color</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((ele)=>{
                        return <CartItem key={ele.product.id} product={ele.product} quantity={ele.qnt} />
                    })}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default CartCheckoutPage