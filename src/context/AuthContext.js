import React from 'react';
import { createContext, useState } from 'react';

export const AutContext =createContext()

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser]= useState()
    return (
        <AutContext.Provider value={{currentUser}}>
            {props.children}
        </AutContext.Provider>
    )
}

export default AuthContextProvider;