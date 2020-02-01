import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { Logo } from './components/Logo';

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </>
);
