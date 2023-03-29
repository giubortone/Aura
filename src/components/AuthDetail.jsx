import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};




const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);


  const value = {
    currentUser,
    setCurrentUser
  }

  use


  return(
    <AuthDetails.Provider value ={value}>
      {children}
    </AuthDetails.Provider>
  )

}

export const UserAuth = () => {
  return useContext(AuthContext);
}


export default AuthDetails;