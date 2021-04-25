import webpack, { RuleSetRule } from 'webpack';
import { typescript } from '../loaders';

interface Options {
  isSSR: boolean;
}

export default ({
  isSSR,
}: Options) => (webpackConfig: webpack.Configuration) => {
  // ------------------------------------
  // TypeScript
  // ------------------------------------
  webpackConfig.module!.rules!.push(!isSSR ? typescript.client as RuleSetRule : typescript.ssr);

  return webpackConfig;
};
