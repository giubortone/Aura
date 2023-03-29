import { Navigate } from "react-router-dom";
import { UserAuth } from "../components/AuthDetail";

 export const PrivateRoute = ({ children }) => {
  const {currentUser} = UserAuth();
    
    if(!currentUser){
        return <Navigate to = "l" replace ={true} />
    }
    return children;
}

