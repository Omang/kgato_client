import React from 'react'
import { Link } from 'react-router-dom'

const DocNav = () => {
  return (
    <div className='flex flex-row justify-center items-center  mt-8 px-4'>
      <div className='flex flex-row justify-between'>
        <Link className='border rounded-2xl mx-1 px-2 py-1 border-green-500 hover:bg-green-500'>Main</Link>
        <Link className='border rounded-2xl mx-1 px-2 py-1 border-green-500 hover:bg-green-500'>Patients</Link>
        <Link className='border rounded-2xl mx-1 px-2 py-1 border-green-500 hover:bg-green-500'>Appointments</Link>
      </div>
    </div>
  )
}

export default DocNav