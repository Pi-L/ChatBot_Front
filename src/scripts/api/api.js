import axios from 'axios';
import Message from '../model/Message';

// axios.defaults.baseURL = `http://127.0.0.1:8080/`;
axios.defaults.baseURL = "https://warm-wave-35485.herokuapp.com/";

const getMessage = (user, message) => axios.get(`${encodeURIComponent(user)}/${encodeURIComponent(message)}`)
    .then(({data = {}} = {}) =>
        new Message(data))
    .catch(err =>
        console.log('erreur de requete : ',err));


export default getMessage;
