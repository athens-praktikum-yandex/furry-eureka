import { Configuration, node } from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  cssLoader,
  fileLoader,
  svgLoader,
  tsLoader,
} from './loaders';
import { DIST_DIR, SRC_DIR } from './env';

const config: Configuration = {
  entry: path.join(SRC_DIR, 'client'),

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
    fallback: {
      fs: false,
    },
  },

  devtool: 'eval-source-map',

  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      fileLoader.client,
      svgLoader.client,
      cssLoader.client,
      tsLoader.client,
    ],
  },

  plugins: [
    // @ts-ignore
    new MiniCssExtractPlugin(),

    // @ts-ignore
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'www/assets',
          to: './assets',
        },
      ],
    }),

    new GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 10000000,
    }),

    new node.NodeTargetPlugin(),
  ],
};

export default config;
