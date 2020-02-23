import React from 'react';
import { Link, Grid, Image } from './styles';

export const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {favs.map((favorite) => (
      <Link to={`/detail/${favorite.id}`} key={favorite.id}>
        <Image src={favorite.src} key={favorite.id} />
      </Link>
    ))}
  </Grid>
);
