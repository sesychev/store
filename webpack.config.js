const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // for what?
const EslingPlugin = require("eslint-webpack-plugin"); // for what?

const baseConfig = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "dist.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ts?|js?)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, "./src/assets/img/logo.png"),
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets", "img"),
          to: path.resolve(__dirname, "dist", "assets", "img"),
        },
        {
          from: path.resolve(__dirname, "src", "assets", "svg"),
          to: path.resolve(__dirname, "dist", "assets", "svg"),
        },
        {
          from: path.resolve(__dirname, "src", "assets", "data"),
          to: path.resolve(__dirname, "dist", "assets", "data"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new EslingPlugin({
      extensions: "ts",
    }),
  ],
};

const prod = require("./webpack.prod.config"); //
const dev = require("./webpack.dev.config"); //

module.exports = ({ mode }) => {
  const isProductionMode = mode === "prod";
  const envConfig = isProductionMode ? prod : dev;

  return merge(baseConfig, envConfig);
};
