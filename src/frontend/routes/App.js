import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import GlobalStyles from '../styles/GlobalStyles';
import Logo from '../Components/Logo';
import NavBar from '../Components/NavBar';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Favs from '../pages/Favs';
import User from '../pages/User';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const App = ({ isAuth }) => {
  return (
    <Router>
      <Logo />
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={isAuth ? Home : Login} />
        <Route
          exact
          path='/pet/:categoryId'
          component={isAuth ? Home : Login}
        />
        <Route
          exact
          path='/detail/:detailId'
          component={isAuth ? Detail : Login}
        />
        <Route exact path='/favs' component={isAuth ? Favs : Login} />
        <Route exact path='/user' component={isAuth ? User : Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
      <NavBar />
    </Router>
  );
};

export default App;
