import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Header from './components/header/Header'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import not from './images/not.png'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path='*' element={<img className='notempty' src={not} alt="" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
