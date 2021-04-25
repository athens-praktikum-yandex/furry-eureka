import { CheckerPlugin } from 'awesome-typescript-loader';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import { join } from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';

import {
  CLIENT_DIR,
  DIST_DIR,
  ROOT_DIR,
} from '../assets/dir';
import { ENVS, GLOBAL_ARGS } from '../assets/env';

type InputParameters = {
  index: number,
  lang: string,
};

const { DEV, PROD } = ENVS;

const vendorsManifest = require(
  join(DIST_DIR, 'webpack', 'vendors-manifest.json').replace('dist/dist', 'dist'),
);

export default ({ lang, index }: InputParameters) => (webpackConfig: webpack.Configuration) => {
  // Т.к. все сборки отличаются только переводами, то проверять типы можно только один раз
  const shouldCheckTypes = index === 0;

  webpackConfig = Object.assign(webpackConfig, {
    name: `client_${lang}`,
    target: 'web',
    devtool: 'source-map',
    entry: {
      desktop: [
        DEV && 'css-hot-loader/hotModuleReplacement',
        DEV && `webpack-hot-middleware/client?path=/__webpack_hmr_${index}`,
        join(CLIENT_DIR, 'bundles', 'desktop').replace('dist/', ''),
      ].filter(Boolean) as string[],
    },
    mode: DEV ? 'development' : 'production',
    output: {
      filename: `[name].bundle.${lang}.js`,
      library: 'Client',
      libraryTarget: 'var',
      path: join(DIST_DIR, 'client'),
      publicPath: DEV
        ? '/static/'
        : 'https://athens-game.herokuapp.com/',
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json'],
      plugins: [
        new TsconfigPathsPlugin(),
      ],
    },
    module: {
      rules: [],
    },
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
      new webpack.DllReferencePlugin({
        context: ROOT_DIR,
        manifest: vendorsManifest,
      }),
      new webpack.ProgressPlugin(),
      new CheckerPlugin(),
      new webpack.DefinePlugin(GLOBAL_ARGS),
      new LodashModuleReplacementPlugin({
        shorthands: true,
        cloning: true,
        currying: true,
        collections: true,
        coercions: true,
        flattening: true,
        paths: true,
      }),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    ],
  });

  if (shouldCheckTypes) {
    webpackConfig.plugins!.push(
      new ForkTsCheckerPlugin(),
    );
  }

  if (DEV) {
    webpackConfig.plugins!.push(
      new webpack.HotModuleReplacementPlugin(),
      new CompressionWebpackPlugin({ minRatio: 1 }),
    );
  }

  if (PROD) {
    webpackConfig.plugins!.push(
      new DuplicatePackageCheckerPlugin() as WebpackPluginInstance,
    );
  }

  return webpackConfig;
};
