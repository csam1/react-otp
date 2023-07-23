const path = require("path");

module.exports = {
  entry: path.resolve(path.join(__dirname, "src/index.jsx")),
  output: {
    path: path.resolve(path.join(__dirname, 'build')),
    publicPath: '../dist/',
    filename: '[name].js' // output bundle.js and vendor.js
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
