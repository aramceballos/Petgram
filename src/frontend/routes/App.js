import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import GlobalStyles from '../styles/GlobalStyles';
import Logo from '../Components/Logo';
import NavBar from '../Components/NavBar';
import { Context } from '../Context';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Favs from '../pages/Favs';
import User from '../pages/User';
import NotFound from '../pages/NotFound';
import NotRegisteredUser from '../pages/NotRegisteredUser';
const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Router>
      <Logo />
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pet/:categoryId' component={Home} />
        <Route exact path='/detail/:detailId' component={Detail} />
        {!isAuth && <Route exact path='/login' component={NotRegisteredUser} />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Route exact path='/favs' component={Favs} />
        <Route exact path='/user' component={User} />
        <Route component={NotFound} />
      </Switch>
      <NavBar />
    </Router>
  );
};

export default App;
