import path from 'path';
import { Configuration } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpackNodeExternals from 'webpack-node-externals';
import { DIST_DIR, SRC_DIR } from './env';
import {
  cssLoader,
  fileLoader,
  svgLoader,
  tsLoader,
} from './loaders';

const config: Configuration = {
  name: 'server',

  node: { __dirname: false },

  entry: path.join(SRC_DIR, 'server'),

  module: {
    rules: [
      fileLoader.server,
      svgLoader.server,
      cssLoader.server,
      tsLoader.server,
    ],
  },

  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/static/',
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },

  devtool: 'eval-source-map',

  externalsPresets: { node: true },
  externals: [webpackNodeExternals()],

  optimization: { nodeEnv: false },
};

export default config;
