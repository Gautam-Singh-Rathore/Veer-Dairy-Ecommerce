import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
