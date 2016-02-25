module.exports = {
  entry: "./app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
  ]
};
