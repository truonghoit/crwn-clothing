import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';
import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',});
    } catch (error) {
      console.log("Error: ", error);
    }
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
