import React from 'react';
import { useInputValue } from '../../hooks/userInputValue';
import { Form, Input, Title } from './styles';
import { SubmitButton } from '../SubmitButton';

export const UserForm = ({ onSubmit, disabled, success, title, error }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          {...email}
          disabled={disabled}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          {...password}
          disabled={disabled}
        />
        <SubmitButton type="submit" disabled={disabled}>
          {title}
        </SubmitButton>
      </Form>
      {error && error}
      {success && success}
    </>
  );
};
