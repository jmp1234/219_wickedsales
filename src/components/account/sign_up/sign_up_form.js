import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignUpForm = props => {
  console.log(props)
  const {handleSubmit, signUp} = props;


    return(
      <form onSubmit={handleSubmit(signUp)} >
        <div className="row">
          <Field  col="s12" id="name" name="name" component={Input} label="Full Name"/>
        </div>
        <div className="row">
          <Field  col="s12" id="bob" name="email" component={Input} label="Email"/>
        </div>
        <div className="row">
          <Field col="s12" id="newPassword" name="password" component={Input} type="password" label="Password"/>
        </div>
        <div className="row">
          <Field col="s12" id="confirmPassword" name="confirm password" component={Input} type="password" label="Confirm Password"/>
        </div>


        <div className="row">
          <div className="col s12 right-align">
            <button className="btn blue">Sign Up</button>
          </div>
        </div>
      </form>
    )
}

function validate({email, password}) {
  const errors = {};

  if(!email) {
    errors.email = 'Please enter your email';
  }

  if(!password) {
    errors.password = 'Please enter your password';
  }

  return errors;

}

export default reduxForm({
  form: 'sign-up-form', //this is where we set the name of the form - we just made 'sign-in-form' up
  validate: validate
})(SignUpForm);
