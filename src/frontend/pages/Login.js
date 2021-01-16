import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Alert } from '@material-ui/lab';

import { useInputValue } from '../hooks/userInputValue';

const FormContainer = styled.div`
  padding: 16px 0;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;

  &[disabled] {
    opacity: 0.3;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;

  &[disabled] {
    opacity: 0.3;
  }

  &:hover {
    background: #7502d1;
    cursor: pointer;
  }
`;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useInputValue('');
  const password = useInputValue('');

  const onSubmit = () => {
    setLoading(true);
    axios({
      url: '/auth/sign-in',
      method: 'POST',
      auth: {
        username: email.value,
        password: password.value,
      },
    })
      .then(({ data }) => {
        setLoading(false);
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `token=${data.token}`;
        window.location.href = '/';
      })
      .catch(() => {
        setErrorMessage('Incorrect email or password');
        setLoading(false);
      });
  };

  return (
    <>
      <Title>Log in</Title>
      <FormContainer>
        <Input
          type='email'
          placeholder='Email'
          {...email}
          disabled={loading}
          onKeyDown={(ev) => ev.key === 'Enter' && onSubmit()}
        />
        <Input
          type='password'
          placeholder='Password'
          {...password}
          disabled={loading}
          onKeyDown={(ev) => ev.key === 'Enter' && onSubmit()}
        />
        <Button onClick={onSubmit} disabled={loading}>
          Log in
        </Button>
      </FormContainer>
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
    </>
  );
};

export default Login;
