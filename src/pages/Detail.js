import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { Layout } from '../Components/Layout';

export const Detail = ({ detailId }) => (
  <Layout title={`Detail ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
);
