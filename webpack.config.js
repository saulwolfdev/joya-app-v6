const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin');

let mode = "development";
let target = "web";


if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin(
  //Auxiliares
  {
    template: "./src/index.html",
    filename: "./index.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/styleguide.html",
    filename: "./styleguide.html",
  }),
  //Cliente final
  new HtmlWebpackPlugin({
    template: "./src/login.html",
    filename: "./login.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/home-cliente.html",
    filename: "./home-cliente.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/pedidos-proximos.html",
    filename: "./pedidos-proximos.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/pedidos-pasados.html",
    filename: "./pedidos-pasados.html",
  }),
  //Vidrierista
  new HtmlWebpackPlugin({
    template: "./src/home-vidrierista.html",
    filename: "./home-vidrierista.html",
  }),

  //Administrador
  new HtmlWebpackPlugin({
    template: "./src/admin/clientes.html",
    filename: "./admin-clientes.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/admin/cliente-local.html",
    filename: "./admin-cliente-local.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/admin/locales.html",
    filename: "./admin-locales.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/admin/local.html",
    filename: "./admin-local.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/admin/vidrieristas.html",
    filename: "./admin-vidrieristas.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/admin/vidrierista.html",
    filename: "./admin-vidrierista.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/solicitar-limpieza/paso1.html",
    filename: "./paso1.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/solicitar-limpieza/paso2.html",
    filename: "./paso2.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/solicitar-limpieza/paso3.html",
    filename: "./paso3.html",
  }),

  new MiniCssExtractPlugin({
    filename: '[name].css',
    ignoreOrder: false
}),
new CopyPlugin([
    { from: 'src/assets/favicons', to: 'favicons/' },
    { from: 'src/assets/fontawesome', to: 'fontawesome/' },
    { from: 'src/assets/img', to: 'img/' },
    { from: 'src/assets/js', to: 'js/' },

]),
];
module.exports = {
  mode: mode,
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  optimization: {
    minimizer: [ new OptimizeCssAssetsPlugin() ]
},
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,

            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,

        type: "asset",

      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {

          loader: "babel-loader",
          options: {

            cacheDirectory: true,
          },
        },
      },
    ],
  },
  target: target,
  plugins:plugins,
  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    contentBase: "./dist",
    hot: true,
  }, 
};
