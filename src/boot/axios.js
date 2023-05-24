const axios = require('axios')

const defaultOptions = {
  baseURL: process.env.VUE_APP_URL_API,
  headers: {
    'Content-Type': 'application/json',
  }
};

let api = axios.create(defaultOptions);

export { api };