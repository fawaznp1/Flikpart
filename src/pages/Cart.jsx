import React, { useEffect, useState } from 'react'
import { Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



function Cart() {
  const cartArray=useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
  const getTotal=()=>{
    if(cartArray?.length>0){
      setTotal(cartArray?.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else
    {
      setTotal(0)
    }
  }
useEffect(()=>{
  getTotal()
},[cartArray])
const handleSubmit=()=>{
  alert("Your order has been placed")
  dispatch(emptyCart())
  navigate('/')
}
  return (
    
    <div className='mt-3'>
     { cartArray?.length>0? <div>
        <table className='table border shadow w-50 flex-column'>
          <thead>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </thead>
          <tbody>
            {
              cartArray?.map((item,index)=>(
             <tr>
               <td>{index+1}</td>
               <td>{item.title}</td>
               <td><img src={item.thumbnail} width={'150px'} alt="no image" /></td>
               <td>₹{item.price}</td>
               <td><Button onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
             </tr>
              ))
              }
          </tbody>
        </table>
       <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
         <div className='border shadow p-5'>
               <h2 className='text-primary'>Summary</h2>
               <h4>Total number of products:  {cartArray.length}</h4>
               <h4>Total amount to pay: ₹ {total}</h4>
               <button onClick={handleSubmit} className='btn btn-success rounded w-100 mt-3'>Checkout</button>
               <ToastContainer/>
         </div>
       </div>
      </div>
      
      : <div>
        <img className='w-50 justify-content-center align-items-center' src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif" alt="Cart gif" />
        <h3 className='d-flex justify-content-center align-items-center fw-bold' style={{color:"black"}}>Your cart is empty!😊</h3>
      </div>
      } 
    </div>
        
  )       
    }         

export default Cart