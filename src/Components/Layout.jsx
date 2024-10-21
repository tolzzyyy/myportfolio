import React from 'react'
import TopNav from './TopNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
       {/* <TopNav/> */}
       <Outlet/>
    </div>
  )
}

export default Layout
