import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Article from '../pages/Article'
import Product from '../pages/Product'
import Services from '../pages/Services'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/article" element={<Article />} />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    </div>
  )
}

export default Routing