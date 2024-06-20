import React from 'react'
import { Link } from 'react-router-dom'

const RepNav = () => {
  return (
    <div className='flex flex-row justify-center mt-8 items-center px-4'>
      <div className='flex flex-row justify-between'>
        <Link className='border rounded-2xl mx-1 px-2 py-1 border-green-500 hover:bg-green-500' to={'/rep'}>Main</Link>
        <Link className='border rounded-2xl mx-1 px-2 py-1 border-green-500 hover:bg-green-500' to={'/patients'}>Patients</Link>
        <Link className='border rounded-2xl mx-1 px-2 py-1 border-green-500 hover:bg-green-500' to={'/appointments'}>Appointments</Link>
        <Link className='border rounded-2xl mx-1 px-2 py-1 border-green-500 hover:bg-green-500' to={'payments'}>Payments</Link>
      </div>
    </div>
  )
}

export default RepNav