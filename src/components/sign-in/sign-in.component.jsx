import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';
import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.state({
      email: '',
      password: '',
    });
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]:value,
    });
  }
  render(){
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required />
          <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} label='password' required />
          <div className='buttons'>
            <CustomButton type='submit'>Submit Form</CustomButton>
            <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn>Submit Form With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
