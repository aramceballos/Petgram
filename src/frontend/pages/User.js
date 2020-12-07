import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../Components/SubmitButton';
import { Layout } from '../Components/Layout';

export default () => {
  const { removeAuth } = useContext(Context);

  return (
    <Layout title="User">
      <h1>User</h1>
      <SubmitButton onSubmit={removeAuth}>Logout</SubmitButton>
    </Layout>
  );
};
