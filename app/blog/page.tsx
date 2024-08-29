'use client'
import React from 'react'

export default function page() {
  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    await fetch('/blog/create', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'value' }),
    });
  }
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <button className='w-20 h-20 bg-accent' 
      onClick={handleClick}>Click</button>
    </div>
  )
}
