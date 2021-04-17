import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { store } from '@components/App/App';

const validStatuses = [
  200,
];

const errorStatuses = [
  400,
  401,
  409,
  500,
];

const client: AxiosInstance = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2',
  withCredentials: true,
  validateStatus: (status) => [...validStatuses, ...errorStatuses].includes(status),
});

export const ajax = async <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const response = await client(config);

  if (response.status === 200 || response.status === 400) {
    store.dispatch({ type: 'SET_IS_AUTH', payload: { isAuth: true } });
  }

  if (response.status === 401) {
    store.dispatch({ type: 'SET_IS_AUTH', payload: { isAuth: false } });
  }

  if (errorStatuses.includes(response.status)) {
    throw new Error(response.data.reason || response.data.error || response.statusText);
  }

  return response;
};
