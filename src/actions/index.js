// Lodash es una biblioteca de javascript que permite trabajar con arrays
// de una forma más limpia.

import _ from 'lodash';

// jsonPlaceholder es un API con data fictícia para testeo y prototipo.

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // _.chain es una función de _Lodash que permite encadenar funciones, es simplemente
  // para hacer el codigo más entendible visualmente.
  // entonces, el listado de posts es entregado al argumento Map, al cual se le pasa
  // el segundo argumento "userId", el cual se lo pasa a .uniq... etc, etc.

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// Action creator para hacer Fetch del Usuario del post una sola vez por más que haya multiples
// posts con el mismo ID del usuario, reduciendo la cantidad de solicitudes de red a el API.

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// Debajo ejemplo de la misma función para solucionar el problema pero utilizando _Memoize de _Lodash:

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
