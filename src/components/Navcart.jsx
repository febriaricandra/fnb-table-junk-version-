import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowRoundBack} from "react-icons/io"
export default function Navcart() {
  return (
    <div className='flex flex-row my-4 items-center'>
        <Link to="/">
            <IoMdArrowRoundBack size="32px" />
        </Link>
        <h1 className='mx-4 text-2xl font-bold'>Cart</h1>
    </div>
  )
}
