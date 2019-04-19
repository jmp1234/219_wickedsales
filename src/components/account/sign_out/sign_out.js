import React, {Component} from 'react';
import './sign_out.scss';
import { connect } from 'react-redux';
import { signOut } from '../../../actions';
//import connect and the sign out action creator

class SignOut extends Component {

  componentDidMount() {
    //Action creator for sign out, don't forget connect, see sign_in
    this.props.signOut();
  }

  render() {
    return (
      <div className="sign-out">
        <div className="sign-out-header center">
          <h1>Thank You for Visiting Our Site</h1>
          <h2>You have been signed out</h2>
        </div>
      </div>
    )
  }
}

//use connect to add sign out action creator to components props
// export default SignOut;
export default connect(null, {
  signOut: signOut
})(SignOut);
