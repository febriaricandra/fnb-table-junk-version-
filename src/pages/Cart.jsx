import React from 'react'
import Navcart from '../components/Navcart'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import {TbTrashX,TbError404} from 'react-icons/tb'


export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    let total = 0;
    const getTotal = () => {
        cart.forEach((item) => {
          //parse to int item.harga
          total += parseInt(item.harga) * item.quantity;
        })
        return total;
    }

    const handleCheckout = () => {
        navigate('/menu/order');
        localStorage.setItem('total', total);
    }


  return (
    <div className='bg-slate-300 w-full h-screen'>
        <div className='container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col p-4'>
            <Navcart />
            {cart?.map((item, index) => (
                <div key={index} className='flex justify-between items-center border-b-2 border-black-500 my-2'>
                    <div className='flex items-center my-2'>
                        <div className='flex flex-col'>
                            <h1 className='text-lg font-bold'>{item.nama}</h1>
                            <span className='text-sm'>Rp. {item.harga}</span>
                            <span className='text-sm'>Qty: {item.quantity}</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={()=> dispatch(removeItem(item.id))} className=''>
                        <TbTrashX size="24px" color='black' />
                        </button>
                    </div>
                </div>
              ))}
              { cart.length === 0 ? (<div className='flex flex-col items-center my-12'>
                <TbError404 size="64px" color='black' />
                <h1 className='text-center font-bold text-2xl'>Your cart is empty</h1>
              </div>) : (
                <>
                  <h1 className='font-bold text-xl'>Total: {getTotal()}</h1>
                  <button onClick={handleCheckout} className='bg-green-600 text-white w-full my-2 h-8 font-bold'>Checkout</button>
                  <hr />
                </>
              )}
        </div>
    </div>
  )
}
