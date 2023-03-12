import React from 'react'
import {IoCartOutline} from "react-icons/io5"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='flex flex-row justify-between items-center mx-4 h-[70px]'>
        <h1 className='text-md font-bold ml-2'>Javanese Restaurant</h1> 
        <Link to="/cart">
            <IoCartOutline size="32px" className='ml-auto' />
        </Link>
    </header>
  )
}
