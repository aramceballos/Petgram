import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import { useInputValue } from '../hooks/userInputValue';

const FormContainer = styled.div`
  padding: 14px 15px;
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
  padding: 6px 15px;
`;

const Button = styled.button`
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

const StyledLink = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  color: #5050ff;
  font-weight: 700;
  text-align: right;
  float: right;
`;

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useInputValue('');
  const name = useInputValue('');
  const userName = useInputValue('');
  const password = useInputValue('');

  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter' && !disabled) {
      onSubmit();
    } else {
      if (
        email.value.length > 0 &&
        name.value.length > 0 &&
        userName.value.length > 0 &&
        password.value.length > 0
      ) {
        setDisabled(false);
      }
    }
  };

  const onSubmit = () => {
    setLoading(true);
    axios({
      url: '/auth/sign-up',
      method: 'POST',
      data: {
        email: email.value,
        name: name.value,
        userName: userName.value,
        password: password.value,
      },
    })
      .then(() => {
        setLoading(false);
        window.location.href = '/login';
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Title>Sign up</Title>
      <FormContainer>
        <Input
          type='email'
          placeholder='Email'
          {...email}
          disabled={loading}
          onKeyDown={handleKeyDown}
        />
        <Input
          type='name'
          placeholder='Full Name'
          {...name}
          disabled={loading}
          onKeyDown={handleKeyDown}
        />
        <Input
          type='userName'
          placeholder='Username'
          {...userName}
          disabled={loading}
          onKeyDown={handleKeyDown}
        />
        <Input
          type='password'
          placeholder='Password'
          {...password}
          disabled={loading}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={onSubmit} disabled={loading || disabled}>
          Sign up
        </Button>
        <StyledLink to='/login'>Log In</StyledLink>
      </FormContainer>
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
    </>
  );
};

export default SignUp;
