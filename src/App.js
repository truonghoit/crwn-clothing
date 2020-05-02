import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import {auth} from '../src/firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    console.log("22222222222222222222222222222");
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      console.log("here");
      this.setState({
        currentUser: user,
      });
      console.log("user: ", user);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render(){
    console.log("444444444444444: ", this.state.currentUser);
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/shop' exact component={ShopPage}/>
          <Route path='/signIn' exact component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
