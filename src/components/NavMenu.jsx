import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io"

export default function NavMenu() {
  return (
    <div className='flex flex-row items-center p-2 my-4'>
        <Link to="/">
            <IoMdArrowRoundBack size="32px" />
        </Link>
        <span className='mx-4'>Product</span>
    </div>
  )
}
