type AppEnv = 'development' | 'testing' | 'production';

export const env: AppEnv = (process.env.NODE_ENV as AppEnv) || 'development';

export const ENVS = {
  DEV: env === 'development',
  PROD: env === 'production',
  TEST: env === 'testing',
};
export const GLOBAL_ARGS = {
  ...ENVS,
  'process.env': {
    ...ENVS,
    NODE_ENV: JSON.stringify(env),
    PORT: process.env.PORT || 4007,
  },
};
