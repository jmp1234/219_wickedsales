import React, {Component} from 'react';
import SignUpForm from './sign_up_form';

class SignUp extends React.Component {
  handleSignUp(values) {
    console.log('form values: ', values);
  }

  render() {
    return (
      <div>
        <h1 className="center">SIGN UP</h1>
        <SignUpForm signUp={this.handleSignUp}/>
      </div>
    )
  }
}

export default SignUp;
