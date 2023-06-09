// Generated using webpack-cli https://github.com/webpack/webpack-cli

import * as path from 'path';
import * as url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// const __filename = url.fileURLToPath(import.meta.url);
const absdirname = url.fileURLToPath(new URL('.', import.meta.url));

// const isProduction = process.env.NODE_ENV || 'development';

// const config = {
export default {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(absdirname, 'dist'),
    clean: true,
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // template: 'template.html',
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/i,
  //       loader: 'babel-loader',
  //     },
  //     {
  //       test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
  //       type: 'asset',
  //     },

  //     // Add your rules for custom modules here
  //     // Learn more about loaders from https://webpack.js.org/loaders/
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    ],
  },

};

// module.exports = () => {
//     if (isProduction) {
//         config.mode = 'production';

//     } else {
//         config.mode = 'development';
//     }
//     return config;
// };
