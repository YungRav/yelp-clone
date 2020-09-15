import axios from "axios";

const apiUrl = 'http://localhost:7000/api/stores'

export default {
  // Gets all stores
  getStores: function () {
    return axios.get(apiUrl);
  },
  // Gets the store with the given id
  getStore: function (id) {
    return axios.get(apiUrl + id);
  },
  // Deletes the store with the given id
  deleteStore: function (id) {
    return axios.delete(apiUrl + id);
  },
  // Saves a store to the database
  saveStore: function (storeData) {
    return axios.post(apiUrl, storeData);
  }
};
