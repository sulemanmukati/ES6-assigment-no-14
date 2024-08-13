import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import AppRouter from './Config/AppRouter'
import About from './Pages/About'
import Home from './Pages/Home'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'

function App() {

  return (
    <>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/:id" element={<SingleProduct />} />
        </Routes>
    </>
  )
}

export default App
