import React from 'react';
import { ListOfCategories } from './Components/ListOfCategories';
import { GlobalStyle } from './GlobalStyles';
import { ListOfPhotoCards } from './Components/ListOfPhotoCards';

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
);
