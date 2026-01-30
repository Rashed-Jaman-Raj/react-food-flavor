import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import Cart from './Components/Cart'

const AppLink = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={< Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          
        </Routes>

      <Footer />
    </div>
  )
}

export default AppLink
