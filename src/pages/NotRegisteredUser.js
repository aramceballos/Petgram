import React from 'react';
import Context from '../Context';
import { UserForm } from '../Components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';
import Alert from '@material-ui/lab/alert';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                register({ variables }).then(activateAuth);
              };

              const errorMsg = error && (
                <Alert severity="error">
                  El usuario ya existe o ha ocurrido algun error
                </Alert>
              );

              return (
                <UserForm
                  disabled={loading}
                  error={errorMsg}
                  title="Registrarse"
                  onSubmit={onSubmit}
                />
              );
            }}
          </RegisterMutation>

          <LoginMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                register({ variables }).then(activateAuth);
              };

              const errorMsg = error && (
                <Alert severity="error">Email o Contraseña incorrectos</Alert>
              );

              return (
                <UserForm
                  disabled={loading}
                  error={errorMsg}
                  title="Iniciar Sesión"
                  onSubmit={onSubmit}
                />
              );
            }}
          </LoginMutation>
        </>
      );
    }}
  </Context.Consumer>
);
