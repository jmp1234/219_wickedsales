import React from 'react';
import { reduxForm } from 'redux-form';

const SignInForm = props => {

  return (
    <form>
      <h1>form goes here</h1>
    </form>
  )
}

export default reduxForm({
  form: 'sign-in-form' //this is where we set the name of the form - we just made 'sign-in-form' up
})(SignInForm); //returns a new component
