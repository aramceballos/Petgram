import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.sessionStorage.getItem('token');
    }
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('token', token);
      }
      setIsAuth(true);
    },
    removeAuth: () => {
      if (typeof window !== 'undefined') {
        window.sessionStorage.removeItem('token');
      }
      setIsAuth(false);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
