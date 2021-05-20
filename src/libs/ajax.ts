import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

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

export const ajax = async <T>(
  config: AxiosRequestConfig,
  cookie?: string,
): Promise<AxiosResponse<T>> => {
  const axiosConfig = { ...config };

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
