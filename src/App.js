import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/shop' exact component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
