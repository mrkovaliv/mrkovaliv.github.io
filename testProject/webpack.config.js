"use strict";

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { loader } = require("mini-css-extract-plugin");
module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              {
                plugins: [
                  "@babel/plugin-proposal-class-properties",
                  "@babel/plugin-proposal-private-methods",
                ],
              },
            ],
          },
        },
      },
    ],
  },
};
