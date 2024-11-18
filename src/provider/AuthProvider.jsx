/* eslint-disable react/prop-types */
// import React from 'react';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
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

const manageProfile = (name,image)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:image
    })
}



  const authInfo = {
    user,
    setUser,
    registerUser,
    signIn,
    signInWithGoogle,
    handleSignOut,
    manageProfile,
    loading
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser)
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
