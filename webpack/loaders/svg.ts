const svgRegex = /\.svg$/;

export default {
  client: {
    test: svgRegex,
    loader: '@svgr/webpack',
  },
  server: {
    test: svgRegex,
    loader: 'null-loader',
  },
};
