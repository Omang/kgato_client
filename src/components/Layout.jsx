import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen'>
    <div className="bg-cover min-h-screen" >
      <div className="sticky top-2">
      <Header />
      </div>
      <Outlet />
    </div>
      
    </div>
  )
}

export default Layout
