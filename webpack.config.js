const path = require("path");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'ASANA_BEARER_TOKEN': process.env.ASANA_BEARER_TOKEN
  //     }
  //   })
  // ],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    publicPath: '/public/'
  }
};
