import React from 'react'
import './square.css'

export const Square = ({ value, onClick }) => {
    // Return Component
    return (
        <div className='flex'>
            <button onClick={onClick} className='text-center text-3xl font-bold border w-16 h-16 hover:bg-slate-200 duration-500'>{value}</button>
        </div>
    )
}