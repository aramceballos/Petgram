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
        <Route exact path='/' component={Home} />
        <Route exact path='/pet/:categoryId' component={Home} />
        <Route exact path='/detail/:detailId' component={Detail} />
        {!isAuth && <Route exact path='/login' component={Login} />}
        {!isAuth && <Route exact path='/signup' component={SignUp} />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        {isAuth && <Redirect from='/signup' to='/' />}
        <Route exact path='/favs' component={Favs} />
        <Route exact path='/user' component={User} />
        <Route component={NotFound} />
      </Switch>
      <NavBar />
    </Router>
  );
};

export default App;
