export default (store) => (next) => (action) => {
  //code goes here
  if(typeof action !== 'function') {
    return next(action);
  }

  return action(store.dispatch);
}

// export default function think(store) {
//   return function(next) {
//     return function(action){
//       //code goes here
//     }
//   }
// }
//
// //currying
// think(reduxStore)(theNextFunctionInLine)(action);
