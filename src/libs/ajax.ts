import { BASE_URL } from '@constants/baseUrl';
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { isServer } from './isServer';

type ErrorParameters = {
  name: string,
  message: string,
  code: number
};

export class ErrorWithCode extends Error {
  code: number;

  constructor({ name, message, code }: ErrorParameters) {
    super(name || message);
    this.name = name;
    this.message = message;
    this.code = code;
  }
}

const validStatuses = [
  200,
  201,
];

const errorStatuses = [
  400,
  401,
  409,
  500,
];

const client: AxiosInstance = axios.create({
  validateStatus: (status) => [...validStatuses, ...errorStatuses].includes(status),
});

export const ajax = async <T>(
  config: AxiosRequestConfig,
  cookie?: string,
  baseUrl = BASE_URL.praktikum,
): Promise<AxiosResponse<T>> => {
  const axiosConfig: AxiosRequestConfig = {
    ...config,
    baseURL: baseUrl,
    withCredentials: baseUrl === BASE_URL.praktikum,
  };

  if (baseUrl === BASE_URL.furryEureka && isServer) {
    // eslint-disable-next-line global-require
    const https = require('https');

    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    axiosConfig.httpsAgent = agent;
  }

  if (cookie) {
    axiosConfig.headers = { cookie };
  }

  const response = await client(axiosConfig);

  if (errorStatuses.includes(response.status)) {
    throw new ErrorWithCode(
      {
        name: response.data.error || 'Error',
        message: response.data.reason || response.statusText,
        code: response.status,
      },
    );
  }

  return response;
};
