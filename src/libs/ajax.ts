import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

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

  if (errorStatuses.includes(response.status)) {
    throw new Error(response.data.reason || response.data.error || response.statusText);
  }

  return response;
};
