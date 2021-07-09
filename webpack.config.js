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
    template: "./src/cliente/login.html",
    filename: "./cliente-login.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/notificaciones.html",
    filename: "./notificaciones.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/home.html",
    filename: "./cliente-home.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/cuenta.html",
    filename: "./cliente-cuenta.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/locales.html",
    filename: "./cliente-locales.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/local.html",
    filename: "./cliente-local.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/pedidos-proximos.html",
    filename: "./cliente-pedidos-proximos.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/pedidos-pasados.html",
    filename: "./cliente-pedidos-pasados.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/solicitar-limpieza/paso1.html",
    filename: "./cliente-paso1.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/solicitar-limpieza/paso2.html",
    filename: "./cliente-paso2.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/cliente/solicitar-limpieza/paso3.html",
    filename: "./cliente-paso3.html",
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
    template: "./src/admin/descuentos.html",
    filename: "./admin-descuentos.html",
  }), 
  new HtmlWebpackPlugin({
    template: "./src/admin/descuento-crear.html",
    filename: "./admin-descuento-crear.html",
  }), 
  new HtmlWebpackPlugin({
    template: "./src/admin/descuento-crear-porcentaje.html",
    filename: "./admin-descuento-crear-porcentaje.html",
  }), 
  new HtmlWebpackPlugin({
    template: "./src/admin/agenda.html",
    filename: "./admin-agenda.html",
  }), 
  new HtmlWebpackPlugin({
    template: "./src/admin/agenda-futuro.html",
    filename: "./admin-agenda-futuro.html",
  }), 
  new HtmlWebpackPlugin({
    template: "./src/admin/agenda-pasado.html",
    filename: "./admin-agenda-pasado.html",
  }), 
  new HtmlWebpackPlugin({
    template: "./src/admin/recorridos-armar-paso1.html",
    filename: "./admin-recorridos-armar-paso1.html",
  }), 
  new HtmlWebpackPlugin({
    template: "./src/admin/recorridos-armar-paso3.html",
    filename: "./admin-recorridos-armar-paso3.html",
  }), 
  new HtmlWebpackPlugin({
    template: "./src/admin/recorridos-armar-paso4.html",
    filename: "./admin-recorridos-armar-paso4.html",
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
