import React, { useEffect, useState } from 'react'
import {add} from '../store/cartSlices';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../store/productSlice'
import { STATUSES } from '../store/productSlice';
const Products = () => {
    const dispatch = useDispatch();
    const {data:Products,status} = useSelector((state)=> state.product)
      useEffect(()=>{
      dispatch(fetchProducts());
      // const fetchProduct = async ()=>{

      //   // const res = await fetch('https://fakestoreapi.com/products');
      //   // const data = await res.json();
      //   // console.log(data);
      //   // setProducts(data);
      // }
      // fetchProduct();
    }, [])
    const handleAdd = (product)=>{
        dispatch(add(product)); 
    }
    if(status===STATUSES.LOADING){
      return <h2>Loading....</h2>
    }
    if(status===STATUSES.ERROR){
      return  <h2>Error occured while fetching products </h2>;
    }
  return (
    <div className='productsWrapper'>
        {
            Products.map(product=>(
                <div className='card' key={product.id}>
                 <img src={product.image} alt="loding...." />
                 <h4>{product.title}</h4>
                 <h5>{product.price}</h5>
                 <button onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products