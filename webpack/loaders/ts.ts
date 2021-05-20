export default {
  client: {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  },
  server: {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  },
};
