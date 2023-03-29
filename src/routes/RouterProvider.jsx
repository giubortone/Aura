import {createBrowserRouter} from "react-router-dom";

//Views
import Home from "../views/home/home";
import Login from "../views/login/login";
import Loginoption from "../views/loginoption/loginoption";
import Payment from "../views/payment/payment";
import Register from "../views/register/register";
import Registerdr from "../views/registerdr/registerdr";
import Citas from "../views/citas/citas";
import Citasdr from "../views/citasdr/citasdr";
import Search from "../views/search/search";
import ChatRoom from "../views/ChatRoom/ChatRoom";
import Doctorprofile from "../views/DoctorProfile/doctorprofile";
import Userprofile from "../views/UserProfile/userprofile";
import Feedback from "../views/feedback/feedback";
import Calendar from "../views/calendar/calendar";

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
    },
    {
        path:"/citas",
        element:<Citas/>
    },
    {
        path:"/citasdr",
        element:<Citasdr/>
    },
    {
        path:"/search",
        element:<Search/>
    },
    {
        path: "/chat",
        element: <ChatRoom/>
    }
])
