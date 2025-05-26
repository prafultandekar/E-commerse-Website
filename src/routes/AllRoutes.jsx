

import React from 'react'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
// import NotFound from '../pages/NotFound'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import {Routes ,Route} from "react-router-dom"
import PrivateRoute from '../componets/ProtectedRoute'
import Checkout from '../pages/Checkout'
const AllRoutes = () => {
  return (
    <>
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/product/:id" element={<ProductDetails/>} />
    <Route path="/cart" element={
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      {/* <Route path="*" element={<NotFound/>}/> */}
      <Route path='/checkout' element={<Checkout/>}/>

      </Routes>

    </>
  )
}

export default AllRoutes
