import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { ENVS } from '../assets/env';

const postcssLoader = {
  loader: 'postcss-loader',
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: ENVS.DEV,
    importLoaders: 1,
    modules: {
      localIdentName: ENVS.DEV ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
    },
  },
};

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  cssLoader,
  postcssLoader,
];

const sassLoader = {
  loader: 'sass-loader',
};

export default {
  client: [
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: cssLoaders,
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader' },
        postcssLoader,
      ],
    },
    {
      test: /\.scss$/,
      use: [
        ...cssLoaders,
        sassLoader,
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              'client/sass/_variables.scss',
              'client/sass/_functions.scss',
              'client/sass/_mixins.scss',
              'client/sass/_extendable.scss',
              'client/sass/_reset.scss',
            ],
          },
        },
      ],
    },
  ],

  ssr: [
    {
      test: /\.scss$/,
      loader: 'null-loader',
    },
    {
      test: /\.css$/,
      loader: 'null-loader',
    },
  ],
};
