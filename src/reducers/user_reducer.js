
const DEFAULT_STATE = {
  auth: false,
  username: ''
};

// const exampleAction = { //the action has to have a type property
//   type: 'LOG_USER_IN',
//   username: 'JimBob'
// }

// function userReducer(state, action) { //action is just an object
//   switch(action.type) {
//     case 'LOG_USER_IN':
//       return {...state, auth: true, username: action.username}; //whatever is returned replaces the state with the new object
//     default:
//       return state;
//   } //destructure state so no property gets deleted from original state
// }

function userReducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case 'SIGN_IN':
      return {...state, auth: true};
    default:
      return state;
  }
}

export default userReducer;
