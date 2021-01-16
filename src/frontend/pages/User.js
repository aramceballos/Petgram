import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../Components/SubmitButton';
import { Layout } from '../Components/Layout';

const User = () => {
  const { removeAuth, name } = useContext(Context);

  return (
    <Layout title='User'>
      <h1>{name}</h1>
      <SubmitButton onSubmit={removeAuth}>Logout</SubmitButton>
    </Layout>
  );
};

export default User;
