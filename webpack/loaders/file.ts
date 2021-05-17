const fileRegex = /\.(png|jpe?g|gif|jp2|webp)$/;

export default {
  client: {
    test: fileRegex,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
  server: {
    test: fileRegex,
    loader: 'null-loader',
  },
};
