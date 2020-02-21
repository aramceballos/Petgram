import React, { useState } from 'react';
import { useInputValue } from '../../hooks/userInputValue';
import { Form, Input, Button, Title } from './styles';

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="email" placeholder="Email" {...email} />
        <Input type="password" placeholder="Contraseña" {...password} />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
};
