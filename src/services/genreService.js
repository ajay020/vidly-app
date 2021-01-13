import axios from 'axios';
import {apiUrl} from '../config.json';

export function getGenres() {
     return axios.get(apiUrl+"/genres");
}
