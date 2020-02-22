import React, { useState } from 'react';
import { useInputValue } from '../../hooks/userInputValue';
import { Form, Input, Button, Title } from './styles';

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
        <Button type="submit" disabled={disabled}>
          {title}
        </Button>
      </Form>
      {error && error}
      {success && success}
    </>
  );
};
