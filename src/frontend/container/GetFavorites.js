import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListOfFavs } from '../Components/ListOfFavs';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy="network-only">
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        if (error.message === 'GraphQL error: user does not exist') {
          window.sessionStorage.removeItem('token');
          window.location.href = '/';
        }
        return <p>Error...</p>;
      }
      const { favs } = data;

      return <ListOfFavs favs={favs} />;
    }}
  </Query>
);
