import React, { useState } from 'react';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

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
