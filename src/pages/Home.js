import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { Layout } from '../Components/Layout';

export const Home = ({ categoryId }) => (
  <Layout title="Petgram - your favorite app for pets">
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
);
