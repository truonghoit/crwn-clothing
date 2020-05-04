import React from 'react';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log("userAuth: ", userAuth);
        console.log("userRef: ", userRef);

        userRef.onSnapshot(snapShot => {
          console.log("snapShot.id: ", snapShot.id);
          console.log("snapShot.data: ", snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render(){
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/shop' exact component={ShopPage}/>
          <Route path='/signIn' exact
                 render={()=>currentUser?(<Redirect to={'/'} />):(<SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser : state.user.currentUser,
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
