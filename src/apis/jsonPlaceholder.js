import axios from 'axios';

// Axios es una libreria que se utiliza para hacer
// solicitudes a redes de una manera predecible y segura
// en vez de utilizar Fetch.

export default axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
});
