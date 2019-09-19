'use strict'
const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob');

const serverConfig = function (env, args) {
  return {
    target: 'node',
    mode: env.production ? 'production' : 'development',
    entry: {
      ['server/server']: glob.sync('./server/**/*.ts')
    },
    output: {
      path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['ts-loader'],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.ts', '.js']
    }
  }
};

const clientConfig = function(env, args) {
  return {
    mode: env.production ? 'production' : 'development',
    entry: {
      ['client/index']: path.resolve(__dirname, 'client/src')
    },
    module: {
      rules: [
        {
          test: /\.(gsvg|if|png|jpe?g)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: './client/images/[name].[ext]'
              }
            }
          ]  
        },
        {
          test: /\.vue$/,
          use: ['vue-loader']
        },
        {
          test: /\.js$/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            // 'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    // devServer: {
    //   contentBase: './build',
    //   hot: true,
    //   watchOptions: {
    //     poll: true
    //   }
    // },
    plugins: [
      new CleanWebpackPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: `${env.production ? 'client/' : ''}index.html`,
        template: 'client/src/index.html',
        inject: false
      }),
      new MiniCssExtractPlugin({
        filename: `${env.production ? 'client/' : ''}client.css`,
        chunkFilename: '[id].css'
      })
    ],
    resolve: {
      extensions: [ '.vue', '.js' ]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build')
    }
    // hotUpdateChunkFilename: 'hot/hot-update.js',
    // hotUpdateMainFilename: 'hot/hot-update.json'
  }
};

module.exports = [ serverConfig, clientConfig ];
