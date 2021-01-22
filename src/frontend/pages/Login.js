import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../actions';
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

const Checkbox = styled.input`
  margin-top: 10px;
`;

const Label = styled.label`
  margin-left: 2px;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  color: #5050ff;
  font-weight: 700;
  text-align: right;
  float: right;
`;

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const email = useInputValue('');
  const password = useInputValue('');

  const onSubmit = () => {
    props.loginUser({ email: email.value, password: password.value }, '/');
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
          Log In
        </Button>
        <Checkbox
          onChange={() => setRememberMe(!rememberMe)}
          checked={rememberMe}
          type='checkbox'
          id='remember'
        />
        <Label htmlFor='remember'>Remember me</Label>
        <StyledLink to='/signup'>Sign up</StyledLink>
      </FormContainer>
      {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
