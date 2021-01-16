import React from 'react';
import { UserForm } from '../Components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';
import { Alert } from '@material-ui/lab';
import { Layout } from '../Components/Layout';

const NotRegisteredUser = () => {
  return (
    <Layout title='Login'>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
            });
          };

          const errorMsg = error && (
            <Alert severity='error'>
              El usuario ya existe o ha ocurrido algun error
            </Alert>
          );

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title='Registrarse'
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
            });
          };

          const errorMsg = error && (
            <Alert severity='error'>Email o Contraseña incorrectos</Alert>
          );

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title='Iniciar Sesión'
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </Layout>
  );
};

export default NotRegisteredUser;
