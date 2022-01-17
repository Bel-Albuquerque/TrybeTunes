import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Album from '../pages/Album';
import ProfileEdit from '../pages/ProfileEdit';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

class AppRouters extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/album/:id" component={ Album } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="/profile" component={ Profile } />
            <Route path="/search" component={ Search } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/" component={ Login } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default AppRouters;
