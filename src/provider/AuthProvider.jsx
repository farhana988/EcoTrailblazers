/* eslint-disable react/prop-types */
// import React from 'react';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
// import { ToastContainer } from "react-toastify";
export const authContext = createContext();
const AuthProvider = ({children}) => {
  

  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  google sign in
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };


//   logout

const handleSignOut = ()=>{
  setLoading(true)
    signOut(auth)
}

//   update profile

const manageProfile = async (name, image) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
    const updatedUser = { ...auth.currentUser, displayName: name, photoURL: image };
    setUser(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

// forget password 

const forgetPass = (email)=>{
  return sendPasswordResetEmail(auth,email)
}



  const authInfo = {
    user,
    setUser,
    registerUser,
    signIn,
    signInWithGoogle,
    handleSignOut,
    manageProfile,
    loading,
    forgetPass 
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
};

export default AuthProvider;
