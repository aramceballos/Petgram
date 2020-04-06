import React from 'react';
import { ListOfCategories } from '../Components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotocards';
import { Layout } from '../Components/Layout';

const HomePage = ({ categoryId }) => (
  <Layout title="Petgram - your favorite app for pets">
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
);

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId == props.categoryId;
});
