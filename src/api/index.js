import axios from 'axios';
import { API_URL, JWT_TOKEN } from '../utils/constants';

export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: JWT_TOKEN,
  },
});
