import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <div className='bg-gray-200 flex flex-row'>
                <div className='bg-black'>
                    <h1 className='m-2 text-2xl text-white'>
                    KGATO PAEDIATRICS CLINIC
                    </h1>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Header