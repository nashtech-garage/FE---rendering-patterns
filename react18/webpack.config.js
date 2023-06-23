const path = require("path");

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
  module: {
    rules: [
        {
            test: /\.(js|jsx|tsx)$/i,
            use: [{ loader: 'babel-loader' }],
        },
        {
            test: /\.(css)$/i,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
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
  module: {
    rules: [
        {
            test: /\.(js|jsx|tsx)$/i,
            use: [{ loader: 'babel-loader' }],
        },
        {
            test: /\.(css)$/i,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
    ],
  },
};

module.exports = [clientConfig, serverConfig];