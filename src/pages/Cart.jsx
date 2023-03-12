import React from 'react'
import Navcart from '../components/Navcart'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/cartSlice'


export default function Cart() {
    const cart = useSelector((state) => state.cart)
    const getTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        })
        return total;
    }
    const dispatch = useDispatch()

  return (
    <div className='bg-slate-300 w-full h-screen'>
        <div className='container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col p-4'>
            <Navcart />
            <hr />
            {cart?.map((item, index) => (
                <div key={index} className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-lg font-bold'>{item.name}</h1>
                            <span className='text-sm'>Rp. {item.price}</span>
                            <span className='text-sm'>Qty: {item.quantity}</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={()=> dispatch(removeItem(item.id))} className='bg-red-500 text-white rounded-full w-8 h-8'>x</button>
                    </div>
                </div>

              ))}
              <h1>total: {getTotal()}</h1>
            <hr />
        </div>
    </div>
  )
}
