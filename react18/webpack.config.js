const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const clientConfig = {
  target: "web",
  entry: "./src/index.tsx",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.tsx', '.json', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.bundle.css",
      runtime: false,
    }),
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx|tsx)$/i,
            use: ['babel-loader'],
        },
        {
            test: /\.(css)$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
    ],
  },
};

const serverConfig = {
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.tsx', '.json', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.bundle.css",
      runtime: false,
    }),
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx|tsx)$/i,
            use: ['babel-loader'],
        },
        {
            test: /\.(css)$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
    ],
  },
};

module.exports = [clientConfig, serverConfig];