import React from 'react';
import Context from '../Context';
import { UserForm } from '../Components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <RegisterMutation>
            {(register) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                register({ variables }).then(activateAuth);
              };

              return <UserForm title="Registrarse" onSubmit={onSubmit} />;
            }}
          </RegisterMutation>
          <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
        </>
      );
    }}
  </Context.Consumer>
);
