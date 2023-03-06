import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/home/home'
import Loginoption from './views/loginoption/loginoption'

function App() {
  return (
    <div>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='h' element={<Loginoption/>} />
      </Routes>
    </div>
  )          
}

export default App
