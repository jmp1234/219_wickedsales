import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignUpForm = props => {
  console.log(props)
  const {handleSubmit, signUp} = props;


    return(
      <form onSubmit={handleSubmit(signUp)} >
        <div className="row">
          <Field  col="s6" id="name" name="name" component={Input} label="Full Name"/>
          <Field  col="s6" id="bob" name="email" component={Input} label="Email"/>
        </div>

        <div className="row">
          <Field col="s6" id="newPassword" name="password" component={Input} type="password" label="Password"/>
          <Field col="s6" id="confirmPassword" name="confirmPassword" component={Input} type="password" label="Confirm Password"/>
        </div>



        <div className="row">
          <div className="col s12 right-align">
            <button className="btn blue">Sign Up</button>
          </div>
        </div>
      </form>
    )
}

function validate({name, email, password, confirmPassword}) {
  const errors = {};

  if(!name) {
    errors.name = 'please enter your name'
  }

  if(!email) {
    errors.email = 'Please enter your email';
  }

  if(!password) {
    errors.password = 'Please enter your password';
  }

  if(!confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if(password !== confirmPassword) {
    errors.confirmPassword = 'Your passwords are not the same';
  }


  return errors;

}

export default reduxForm({
  form: 'sign-up-form', //this is where we set the name of the form - we just made 'sign-in-form' up
  validate: validate
})(SignUpForm);
