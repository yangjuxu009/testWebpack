const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
/*清理文件夹*/
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
/*打包文件夹映射路径*/
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'/*,hash:true*/
            ,
            filename: 'index.html',
            template: 'index3.html',
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
        }), new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: path.resolve(__dirname),
        })

    ],
    devtool: 'inline-source-map', /*跟踪错误信息*/
    devServer: {
        contentBase: './dist',
        headers: {
            "X-Custom-Foo": "bar"
        }, proxy: {
            '/acmp': {
                target: 'http://221.181.129.90:10110/acmp/front/sh/login!connect?uid=c001&refresh=0.3532803229595156'/*,
                pathRewrite: {'^/api' : ''}*/
            }
            /*'/api': {
                target: 'www.baidu.com',
                changeOrigin: true
            }*/

        }
    },
    output: {
        filename: '[name].bundle.js',
        /* filename: '[name].[chunkhash].js',*/
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: "production",
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                exclude: /node_modules/,
                uglifyOptions: {
                    ie8: true // 解决ie下的关键字default的问题
                }
            })
        ]
    },
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                rules: [
                    // 模块规则（配置 loader、解析器等选项）
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env']],
                                plugins: [
                                    ['@babel/plugin-transform-modules-commonjs'],
                                    ['@babel/plugin-transform-object-assign']
                                ]
                            }
                        }
                    }
                ]



            }
        ]
    }
};