import {createBrowserRouter} from "react-router-dom";

//Views
import Home from "../views/home/home";
import Login from "../views/login/login";
import Loginoption from "../views/loginoption/loginoption";
import Payment from "../views/payment/payment";
import Register from "../views/register/register";
import Registerdr from "../views/registerdr/registerdr";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login/option",
        element:<Loginoption/>
    },
    {
        path:"/payment",
        element:<Payment/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/register/dr",
        element:<Registerdr/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])
