import React from 'react';
import axios from 'axios';

import './App.css';
import './index.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Item_card } from './components/Item_card';

import AppContext from './components/context';
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
  const [items, setItems] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [itemOpened, setItemOpened] = React.useState(false);
  const [showItems, setShowItem] = React.useState([]);
  const [categoryName, setCategory] = React.useState('Все');
  const [sortType, setSort] = React.useState({
    name: 'цене 1-9',
    sortP: 'price',
  });
  const [count, setCount] = React.useState(1);

  const plus = () => {
    setCount(count + 0.5);
  };
  const minus = () => {
    if (count > 0.5) {
      setCount(count - 0.5);
    }
  };

  const onShowItem = async (obj) => {
    try {
      setShowItem(() => [obj]);
    } catch (error) {
      alert('ошибка');
      console.error(error);
    }
  };
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => item.id === obj.id);
      if (findItem) {
        axios.delete(`https://6298d5d6f2decf5bb74cc366.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        axios.post(`https://6298d5d6f2decf5bb74cc366.mockapi.io/cart`, obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Товар уже в корзине или произошла какая-то ошибка');
      console.error(error);
    }
  };
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://6298d5d6f2decf5bb74cc366.mockapi.io/Plate/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://6298d5d6f2decf5bb74cc366.mockapi.io/Plate', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://6298d5d6f2decf5bb74cc366.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert('Ошибка при удалении из Корзины');
      console.error(error);
    }
  };

  const sortBy = sortType.sortP.replace('-', '');
  const order = sortType.sortP.includes('-') ? 'desc' : 'asc';

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse, categoriesResponse] =
          await Promise.all([
            axios.get('https://6298d5d6f2decf5bb74cc366.mockapi.io/cart'),
            axios.get('https://6298d5d6f2decf5bb74cc366.mockapi.io/Plate'),
            axios.get(
              `https://63fb326b4e024687bf73d265.mockapi.io/items?${
                categoryName !== 'Все' ? `category=${categoryName}` : ''
              }&sortBy=${sortBy}&order=${order}`,
            ),
            axios.get('https://63fb326b4e024687bf73d265.mockapi.io/categories'),
          ]);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        alert('Непредвиденная ошибка при обработке данных');
        console.error(error);
      }
    }
    fetchData();
    // window.scrollTo(0,0);
  }, [categoryName, sortType]);
  return (
    <AppContext.Provider
      value={{
        items,
        categories,
        cartItems,
        setCartItems,
        onAddToFavorite,
        favorites,
      }}>
      <div className="App">
        {itemOpened && <Item_card onClose={() => setItemOpened(false)} items={showItems} />}
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home categories={categories} />
          </Route>
          <Route path="/catalog" exact>
            <Catalog
              items={items}
              categories={categories}
              setItemOpened={setItemOpened}
              onAddToCart={onAddToCart}
              onShowItem={onShowItem}
              category={categoryName}
              onClickCategory={(category) => setCategory(category)}
              sortType={sortType}
              onChangeSort={(i) => setSort(i)}
              count={count}
              setCount={setCount}
              plus={plus}
              minus={minus}
              onAddToFavorite={onAddToFavorite}
            />
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
            <Cart items={cartItems} onRemove={onRemoveItem} />
          </Route>
          <Route path="/order" exact>
            <Order />
          </Route>
          <Route path="/confirm" exact>
            <Confirm />
          </Route>
          <Route path="/favorites" exact>
            <Favorites items={favorites} />
          </Route>
          <Route path="*">
            <Error_404 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
