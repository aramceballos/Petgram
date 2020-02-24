import React from 'react';
import { FavsWithQuery } from '../container/GetFavorites';
import { Layout } from '../Components/Layout';

export const Favs = () => (
  <Layout title="Favorites">
    <h1>Favs</h1>
    <FavsWithQuery />
  </Layout>
);
