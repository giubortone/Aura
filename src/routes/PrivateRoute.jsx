import { Navigate } from "react-router-dom";


 export const PrivateRoute = ({ children }) => {
  const currentUser = false;
    
    if(!currentUser){
        return <Navigate to = "l" replace ={true} />
    }
    return children;
}

