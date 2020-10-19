const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
