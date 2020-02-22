import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../Components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';
import Alert from '@material-ui/lab/alert';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
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
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
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
};
