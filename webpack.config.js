var path = require('path')
var webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CSSNext = require('postcss-cssnext')
var postcssEasyImport = require('postcss-easy-import')
var purifyCSS = require("purifycss-webpack-plugin")
var CSSlinter = require("stylelint")

var BUILD_DIR = "compiled_assets"
var plugins = [
  new ExtractTextPlugin(BUILD_DIR + '/styles.css', { allChunks: true })/*,
  new purifyCSS({
    basePath: __dirname,
    paths: [ "_site/** /*.html" ],
    purifyOptions: { info: true }
  })//*/
];
/*if (process.env.NODE_ENV != "production") {
  plugins.push(new OpenBrowserPlugin({
    url: 'http://localhost:8080'
  }))
}//*/
console.log(process.env.NODE_ENV)

module.exports = {
  entry: [
    //'./_jsx/App.js',
    './_css/site.css'
  ],
  module: {
    loaders: [
      /*{
        test: /\.jsx?$/,
        loader: "babel-loader",
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "_jsx")
        ],
        query: {
          presets: ['es2015', 'react']
        }
      },//*/
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap!postcss-loader',
          'css-loader?sourceMap!postcss-loader'
        )
      }/*,
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract( // breaks all sourcemaps
          'css-loader?sourceMap!sass-loader?sourceMap!postcss-loader',
          'css-loader?sourceMap!sass-loader?sourceMap!postcss-loader'
        )
      }//*/
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css', '']
  },
  postcss: function (webpack) {
    return [
      postcssEasyImport({
        path: '_css',
        glob: true,
        addDependencyTo: webpack,
        extensions: ['.css']
      }),
      //CSSlinter,
      CSSNext
    ];
  },
  output: {
    filename: BUILD_DIR + '/forum.js'
  },
  plugins: plugins,

  colors: true,
  progress: true
}
