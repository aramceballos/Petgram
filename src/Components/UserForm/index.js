import React, { useState } from 'react';
import { useInputValue } from '../../hooks/userInputValue';

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  return (
    <form onSubmit={onSubmit}>
      <input type="email" placeholder="Email" {...email} />
      <input type="password" placeholder="Contraseña" {...password} />
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
};
