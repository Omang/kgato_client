import React from 'react'
import RepNav from '../components/RepNav'
import {Link} from 'react-router-dom'

const RepPage = () => {
  return (
    <div>
        <RepNav />
        <div className='flex flex-col mt-8 mx-4'>
             <div className='flex flex-col items-start justify-start my-2 mx-2'>
                <Link className=' border-b border-green-500 hover:border-b hover:border-green-800 hover:text-red-500' to={'/newpatient'}>Add New Patient</Link>
             </div>
             <div></div>
        </div>
    </div>
  )
}

export default RepPage