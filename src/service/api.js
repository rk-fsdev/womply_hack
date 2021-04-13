import axios from "axios";

import { SERVER_URI } from "../config/env";

let axiosInstance;

const getHeaders = () => ({
  Accept: "application/json",
});

const getAxiosInstance = () => {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: SERVER_URI,
      headers: getHeaders(),
    });
  }
  return axiosInstance;
};

export const getRequest = async (url, params) => {
  const instance = getAxiosInstance();
  const response = await instance.get(url, params);
  return response.data;
};

export const getTodo = (id) => getRequest(`/todos/${id}`);
