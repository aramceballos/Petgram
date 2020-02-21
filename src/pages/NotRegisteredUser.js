import React from 'react';
import Context from '../Context';
import { UserForm } from '../Components/UserForm';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <UserForm title="Registrarse" onSubmit={activateAuth} />
          <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
        </>
      );
    }}
  </Context.Consumer>
);
