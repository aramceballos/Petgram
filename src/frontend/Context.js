import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const Provider = ({ children, isLogged }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [name] = useState(() => {
    if (typeof window !== 'undefined') {
      const name = 'name=';
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && !isLogged) {
      const name = 'token=';
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          c = c.substring(name.length, c.length);
          if (c.length > 0) {
            setIsAuth(true);
            return;
          }
        }
      }
      setIsAuth(false);
    } else if (isLogged) {
      setIsAuth(true);
    }
  }, []);

  const value = {
    isAuth,
    name,
    removeAuth: () => {
      document.cookie = 'email=';
      document.cookie = 'name=';
      document.cookie = 'id=';
      document.cookie = 'token=';
      window.location.href = '/login';
      setIsAuth(false);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
