import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../Components/SubmitButton';

export const User = () => {
  const { removeAuth } = useContext(Context);

  return (
    <>
      <h1>User</h1>
      <SubmitButton onSubmit={removeAuth}>Logout</SubmitButton>
    </>
  );
};
