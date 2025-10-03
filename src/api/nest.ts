import axios from 'axios';

const nest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEST_URL,
  withCredentials: true,
});



export default nest;