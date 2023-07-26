const path = require("path");

module.exports = {
  entry: path.resolve(path.join(__dirname, "src/index.jsx")),
  output: {
    path: path.resolve(path.join(__dirname, 'dist')),
    filename: 'index.js',
    library: "OtpInput",
    libraryTarget: 'umd'
  },
  externals: {react: 'react'},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx$/i,
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
