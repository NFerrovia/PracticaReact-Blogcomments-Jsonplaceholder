// utilizando redux, en los siguientes .js creo y ordeno los reductores
// con los cuales se va a actualizar nuestra información obtenida
// en el state para posts y usuarios.

import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
