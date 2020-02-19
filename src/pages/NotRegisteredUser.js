import React from 'react';
import Context from '../Context';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activate }) => {
      return (
        <form onSubmit={activate}>
          <button type="submit">Iniciar Sesion</button>
        </form>
      );
    }}
  </Context.Consumer>
);
