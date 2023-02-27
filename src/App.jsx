import React from 'react';

import './App.css';
import './index.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { FAQ } from './pages/FAQ';
import { Error_404 } from './pages/Error_404';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Contacts } from './pages/Contacts';
import { About } from './pages/About';
import { Search } from './pages/Search';
import { Profile } from './pages/Profile';
import { Addresses } from './pages/Addresses';
import { Registration } from './pages/Registration';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';
import { Confirm } from './pages/Confirm';
import { Favorites } from './pages/Favorites';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/catalog" exact>
          <Catalog />
        </Route>
        <Route path="/faq" exact>
          <FAQ />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contacts" exact>
          <Contacts />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/profile/addresses" exact>
          <Addresses />
        </Route>
        <Route path="/registration" exact>
          <Registration />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/order" exact>
          <Order />
        </Route>
        <Route path="/confirm" exact>
          <Confirm />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="*">
          <Error_404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
