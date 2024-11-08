'use client'
import React from 'react'
import axios from 'axios'

export default function page() {
  const blog = { key: 'value', prat: 'value', }
  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    //  await axios.post('/blog/create', blog)
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <button className='w-20 h-20 bg-accent'
        onClick={handleClick}>Click</button>
    </div>
  )
}
