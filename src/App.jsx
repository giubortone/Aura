import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from "./Footer";
import Home from './views/home/home'
import Loginoption from './views/loginoption/loginoption'
import Payment from './views/payment/payment'
import Register from './views/register/register'
import Registerdr from './views/registerdr/registerdr'

function App() {
  return (
    <div>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='h' element={<Loginoption/>} />
        <Route path='p' element={<Payment/>} />
        <Route path='r' element={<Register/>} />
        <Route path='d' element={<Registerdr/>} />
      </Routes>
      <div className="App">
        <Footer />
      </div>
    </div>
    
  )          
}

export default App


//export default App