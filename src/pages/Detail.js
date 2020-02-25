import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { Layout } from '../Components/Layout';

export default ({ detailId }) => (
  <Layout title={`Detail ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
);
