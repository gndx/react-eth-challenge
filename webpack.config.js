const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.css|.styl|.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new Dotenv({
        path: `./environments/.env${env.file ? `.${env.file}` : ''}`
      }),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/[name].css'
      })
    ]
  };
};
