import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { Layout } from '../Components/Layout';

const HomePage = ({ categoryId }) => (
  <Layout title="Petgram - your favorite app for pets">
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
);

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId == props.categoryId;
});
