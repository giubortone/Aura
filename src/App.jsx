import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import Home from './views/home/home'
import Loginoption from './views/loginoption/loginoption'
import Payment from './views/payment/payment'
import Register from './views/register/register'
import Registerdr from './views/registerdr/registerdr'
import Login from './views/login/login'
import ChatRoom from './views/ChatRoom/ChatRoom';
import { AuthProvider } from './components/AuthDetail';
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="h" element={<Loginoption />} />
        <Route path="p" element={<Payment />} />
        <Route path="r" element={<Register />} />
        <Route path="d" element={<Registerdr />} />
        <Route path="l" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
      <div className="App">
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

