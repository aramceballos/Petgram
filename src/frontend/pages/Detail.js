import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { Layout } from '../Components/Layout';

export default ({ match }) => {
  const { detailId } = match.params;
  return (
    <Layout title={`Detail ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
