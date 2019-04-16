import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
  console.log(props)
  const {handleSubmit, signIn} = props;

  return (
    <form onSubmit={handleSubmit(signIn)} >

      <div className="row">
        <Field  col="s12" id="Dog" name="email" component={Input} label="Email"/>
      </div>
      <div className="row">
        <Field col="s12" id="password" name="password" component={Input} type="password" label="Password"/>
      </div>


      <div className="row">
        <div className="col s12 right-align">
          <button className="btn blue">Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'sign-in-form' //this is where we set the name of the form - we just made 'sign-in-form' up
})(SignInForm); //returns a new component
