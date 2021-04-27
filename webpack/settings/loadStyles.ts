import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import webpack, { WebpackPluginInstance } from 'webpack';
import { css } from '../loaders';

interface Options {
  isSSR: boolean;
}

export default (_options: Options) => (webpackConfig: webpack.Configuration) => {
  webpackConfig.plugins!.push(
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }) as unknown as WebpackPluginInstance,
  );
  console.log(_options);

  webpackConfig.module!.rules!.push(...css.client);

  return webpackConfig;
};
