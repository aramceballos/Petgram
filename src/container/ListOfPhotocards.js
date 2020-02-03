import React from 'react';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/index';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const query = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = ({ categoryId }) => (
  <Query query={query} variables={{ categoryId }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      const { photos = {} } = data;
      return <ListOfPhotoCardsComponent photos={photos} />;
    }}
  </Query>
);
