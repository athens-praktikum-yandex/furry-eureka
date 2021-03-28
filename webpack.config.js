const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@libs': path.resolve(__dirname, 'src/libs/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.resolve(__dirname, 'www/assets'),
          to: './assets',
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./www/index.html"
    }),
  ]
};