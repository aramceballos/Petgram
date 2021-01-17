import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window !== 'undefined') {
      const name = 'token=';
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

  const value = {
    isAuth,
    name,
    removeAuth: () => {
      document.cookie = 'email=';
      document.cookie = 'name=';
      document.cookie = 'id=';
      document.cookie = 'petgramId=';
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
