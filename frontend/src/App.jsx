
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/footer/Footer'
import LoginPopup from './components/loginPopup/LoginPopup'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myorders/MyOrders'



const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
   <>
   {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>}/>
        < Route path='/cart' element={<Cart/>}/>
        < Route path='/order' element={<PlaceOrder/>}/>
        < Route path='/verify' element={<Verify/>}/>
        <Route  path='/myorders' element={<MyOrders/>}/>

      </Routes>
      <Footer/>

      
    </div></>
  )
}

export default App
