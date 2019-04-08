import React, {Component} from 'react';
import axios from 'axios';

class Test extends React.Component {
  state = {
    message: 'Checking auth...'
  }

  componentDidMount() {
    this.checkAuth();
  }

  async checkAuth() {
    const resp = await axios.get('api/test/check_auth.php');
    console.log('check auth resp:', resp.data);

    this.setState({
      message: resp.data.auth ? 'You are signed in' : 'Please Sign In'
    });
  }

  signIn = async () => {
      const resp = await axios.get('api/test/sign_in.php');
      console.log('sign in resp: ', resp);

      this.checkAuth();
  }

  signOut = async () => {
    await axios.get('/api/test/sign_out.php');

    this.checkAuth();
  }

  render() {
    return (
      <div>
        <h1 className="center">TEST</h1>
        <h2 className="center">{this.state.message}</h2>
        <div className="center">
          <button onClick={this.signIn} className="btn blue btn-large">sign in</button>
          <button onClick={this.signOut} className="btn red btn-large">sign out</button>
        </div>
      </div>
    )
  }
}

export default Test;
