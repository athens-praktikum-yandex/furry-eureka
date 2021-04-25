import { config as envConfig } from 'dotenv';
import merge from 'lodash.merge';
import { join, resolve } from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

import { ROOT_DIR_FROM_WEBPACK } from '../assets/dir';
import { ENVS, GLOBAL_ARGS } from '../assets/env';

type InputParameters = {
  entry: Record<string, unknown>,
  lang: string,
};

envConfig();

const { DADATA_TOKEN } = process.env;
const { DEV } = ENVS;

export default ({ entry, lang }: InputParameters) => (webpackConfig: webpack.Configuration) => {
  Object.assign(webpackConfig, {
    name: `ssr_bundles_${lang}`,
    target: 'node',
    devtool: 'source-map',
    entry: entry.app,
    node: { __dirname: false },
    mode: DEV ? 'development' : 'production',
    externals: [webpackNodeExternals({
      allowlist: [
        /\.(?!(?:jsx?|json)$).{1,5}$/i,
      ],
    })],

    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json'],
      plugins: [
        new TsconfigPathsPlugin(),
      ],
    },

    output: {
      filename: `ssr.bundles.${lang}.js`,
      libraryTarget: 'commonjs2',
      path: join(ROOT_DIR_FROM_WEBPACK, 'dist'),
      publicPath: ENVS.DEV
        ? '/static/'
        : 'https://athens-game.herokuapp.com/',
    },

    module: { rules: [] },

    stats: {
      all: undefined,
      builtAt: !DEV,
      chunks: !DEV,
      assets: !DEV,
      errors: true,
      warnings: true,
      outputPath: true,
      timings: true,
    },
    performance: {
      hints: false,
    },

    plugins: [
      new webpack.DefinePlugin(merge(
        GLOBAL_ARGS,
        {
          'process.env': {
            DADATA_TOKEN: JSON.stringify(DADATA_TOKEN),
            LANG: JSON.stringify(lang),
            APP_SIDE: 'server',
          },
        },
      )),
      new webpack.ProvidePlugin({
        window: resolve(join(__dirname, '../mock/window.mock')),
        localStorage: resolve(join(__dirname, '../mock/localStorage.mock')),
        document: 'global/document',
      }),
    ],
  });

  return webpackConfig;
};
