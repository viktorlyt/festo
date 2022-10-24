// axios docs https://axios-http.com/docs/intro
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.festoapp.co.uk/v1/',
  // application/json is a default Content-Type
});

export const party = {
  async get(url) {
    const response = await instance.get(url);

    // no need to run `response.json()` data is already prepared
    return response.data;
  },

  async post(url, data) {
    const response = await instance.post(url, data);

    return response.data;
  },

  async patch(url, data) {
    const response = await instance.patch(url, data);

    return response.data;
  },

  async delete(url) {
    // if we don't need the response data
    return instance.delete(url);
  },
};
