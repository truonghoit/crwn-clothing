import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../../src/firebase/firebase.utils';

const header = ({ currentUser }) => {
  console.log("===================: ", currentUser);
  return (
    <div className='header'>
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
      </div>
    </div>
  );
}
export default header;
