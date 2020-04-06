import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './Components/Logo';
import { NavBar } from './Components/NavBar';
import { Context } from './Context';
import { ThreeHorseLoading } from 'react-loadingg';

const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));
const Favs = React.lazy(() => import('./pages/Favs'));
const User = React.lazy(() => import('./pages/User'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<ThreeHorseLoading />}>
      <Logo />
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </Suspense>
  );
};
