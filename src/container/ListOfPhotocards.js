import React from 'react';
import { ListOfPhotoCardsComponent } from '../Components/ListOfPhotoCards/index';
import { ThreeHorseLoading } from 'react-loadingg';

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
      if (loading) return <ThreeHorseLoading />;
      if (error) return <p>Error</p>;
      const { photos = {} } = data;
      return <ListOfPhotoCardsComponent photos={photos} />;
    }}
  </Query>
);
