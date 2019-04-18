
export function signIn(user) {

  console.log('Sign In Action Creator, user data: ', user);
//when an action gets dispatched, it goes to the reducer
  return {
    type: 'SIGN_IN' //this will be used in the reducers to tell the state how to update
  }
}
