import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/RouterProvider";
import Footer from './Footer'
import NavBarr from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBarr/>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
  // Esto es lo que permite que la app me deje navegar entre ventanas 
)

