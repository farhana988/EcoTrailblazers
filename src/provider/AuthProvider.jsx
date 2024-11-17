// import React from 'react';

import { createContext } from "react";

const AuthProvider = () => {
    const AuthContext = createContext()






    const authInfo ={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;