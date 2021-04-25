import CopyWebpackPlugin from 'copy-webpack-plugin';

import webpack, { WebpackPluginInstance } from 'webpack';
import {
  csv, file, svg, url,
} from '../loaders';

export default ({
  isCopyStatic = true,
} = {}) => (webpackConfig: webpack.Configuration) => {
  webpackConfig.module!.rules!.push(
    csv,
    file.ssr,
    svg.ssr,
    url,
  );

  if (isCopyStatic) {
    webpackConfig.plugins!.push(
      new CopyWebpackPlugin({
        patterns: [
          { from: './www/favicons', to: 'favicons' },
          { from: './www/robots.txt', to: '' },
        ],
      }) as unknown as WebpackPluginInstance,
    );
  }

  return webpackConfig;
};
