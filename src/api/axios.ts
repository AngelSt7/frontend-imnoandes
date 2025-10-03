import axios  from 'axios';

const nest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEST_URL,
  withCredentials: true,
});

nest.interceptors.request.use(config => {
  if (typeof window === 'undefined') {
    if (!config.headers?.Origin) {
      config.headers.Origin = process.env.NEXT_PUBLIC_FRONTEND_URL;
    }
  }
  return config;
});

export default nest;
