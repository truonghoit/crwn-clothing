import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../../src/firebase/firebase.utils';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

const header = ({ currentUser, hidden }) => {
  return (
    <div className='header' >
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
          currentUser?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signIn'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {
        hidden? null: <CartDropdown />
      }
    </div>
  );
}
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(header);
