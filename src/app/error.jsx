'use client'
import React, {useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    },[error])
  return (
    <div className='flex flex-col text-center mt-10'>
          <h1>Somethinng went wrong</h1>
          <button onClick={() => reset()} className='hover:text-amber-600 py-2'>Try Again</button>
    </div>
  )
}
