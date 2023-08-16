import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlices';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const handleRemove = (id)=>{
       dispatch(remove(id));
  } 
    return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
             cartItems.map(product=>(
              <div key={product.id} className='cartCard'>
                 <img src={product.image} alt="" />
                 <h5>{product.title}</h5>
                 <h5>{product.price}</h5>
                 <button className="btn" onClick={()=>handleRemove(product.id)}>Remove</button>
              </div>
             ))
        }
      </div>
    </div>
  )
}

export default Cart