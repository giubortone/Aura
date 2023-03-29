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
import Doctorprofile from './views/DoctorProfile/doctorprofile';
import Userprofile from './views/UserProfile/userprofile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="h" element={<Loginoption />} />
        <Route path="p" element={<Payment />} />
        <Route path="r" element={<Register />} />
        <Route path="d" element={<Registerdr />} />
        <Route path="l" element={<Login />} />
        <Route path="k" element={<Doctorprofile />} />
        <Route path="n" element={<Userprofile />} />
        <Route path="f" element={<Feedback />} />
        
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
    </div>
  );
}

export default App;

