import {createBrowserRouter} from "react-router-dom";

//Views
import Home from "../views/home/home";
import Loginoption from "../views/loginoption/loginoption";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Loginoption/>
    }
])
