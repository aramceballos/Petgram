import React from 'react';
import { ListOfCategories } from '../Components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotocards';
import { Layout } from '../Components/Layout';

const HomePage = ({ match }) => {
  const { categoryId } = match.params;
  return (
    <Layout title='Petgram - your favorite app for pets'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.match.params.categoryId == props.match.params.categoryId;
});
