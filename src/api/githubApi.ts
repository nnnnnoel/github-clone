import Axios from 'axios';

const githubApi = Axios.create({
  baseURL: 'https://api.github.com',
});

githubApi.interceptors.response.use(
  (value) => {
    return value;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/';
    }
    return error;
  }
);

export default githubApi;
