import CompressionWebpackPlugin from 'compression-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { join } from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';

import { STATS_OPTIONS, VENDORS } from '../assets/config';
import { ROOT_DIR_FROM_WEBPACK } from '../assets/dir';

const DIST_DIR = join(ROOT_DIR_FROM_WEBPACK, 'dist');

const config: webpack.Configuration = {
  target: 'web',
  devtool: 'source-map',
  entry: {
    vendors: VENDORS,
  },
  output: {
    library: '[name]_[hash]',
    filename: '[name]_[hash].js',
    path: join(DIST_DIR, 'client', '_'),
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: join(DIST_DIR, 'webpack', 'vendors-manifest.json'),
    }) as WebpackPluginInstance,
    new MiniCssExtractPlugin({ filename: '[name]_[hash].css' }) as unknown as WebpackPluginInstance,
    new CompressionWebpackPlugin({ minRatio: 1 }) as WebpackPluginInstance,
  ].filter(Boolean),
  stats: STATS_OPTIONS,
};

export default config;
