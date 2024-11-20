import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const authContext=createContext()
// eslint-disable-next-line react/prop-types
const AuthProvider = ({routes}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const handleRegister=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin=(email,password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
    }
    const handleResetPassword=(email)=>{
          return sendPasswordResetEmail(auth,email)
    }
   
    const handleLogout=()=>{
       return signOut(auth)
    }
    const handleGoogleLogin=()=>{
       return signInWithPopup(auth,googleProvider);
    }
    const manageProfile=()=>{
        updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
    }
    const authInfo={
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        manageProfile,
        user,
        setUser,
        loading,
        handleResetPassword
    }

    useEffect(()=>{
         const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
              console.log(currentUser)
              if(currentUser){
                setUser(currentUser)
              }
              else{
                setUser(null)
              }
              setLoading(false)
            return ()=>{
                unSubscribe()
            }
         })
    },[])
    return (
        <div>
          <authContext.Provider value={authInfo} >{routes}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;