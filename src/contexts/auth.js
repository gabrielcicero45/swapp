import React, { createContext, useState, useEffect, useContext } from 'react';

import {authService}  from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const storagedToken = sessionStorage.getItem('ACESS_TOKEN_KEY');

    setUser(storagedToken);
    
  }, []);

  async function Login({email,password} ) {
   authService.login(email,password);
   setUser(sessionStorage.getItem('ACESS_TOKEN_KEY'))
  }

  function Logout() {
    setUser('');
  }

  return (
    <AuthContext.Provider
      value={{signed: user === '' ? false:true , user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}