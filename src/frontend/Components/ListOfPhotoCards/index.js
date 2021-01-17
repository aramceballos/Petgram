import React from 'react';

import { List } from './styles';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCardsComponent = ({ photos = [] }) => {
  return (
    <List>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  );
};
