var webpack=require('webpack');
var path=require("path");  
var srcPath=path.resolve(__dirname,"client");  
var distPath=path.resolve(__dirname,"public"); 
var config={
    devtool:'source-map',
    entry:[
        'babel-polyfill',
        srcPath+"/app.js"
    ],
    output:{  
        path:distPath,  
        publicPath: '/',
        filename:"bundle.js"  
    },  
    resolve: { 
        extensions: [ '.js', '.jsx','.ts','.tsx']    
    },
    module:{
       loaders:[
        {
            test: /\.ts(x?)$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/
        },
        {  
            test:/\.js?$/,  
            exclude: /node_modules/,  
            include: [/client/,/server/],  
            loader:"babel-loader",  
            query: {  
           presets: ['es2015']  
            }           
        },
        {  
            test:/\.jsx?$/,  
            exclude: /node_modules/,  
            include: /client/,  
            loader:"babel-loader",  
            query: {  
           presets: ['es2015','stage-2','react']  
            }   
        },
        {
            test:/\.css$/,
            exclude: /node_modules/,  
            include: /client/,
            loader:['style-loader','css-loader'] 
        },
        {
            test:/\.(png|woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,  
            include: /client/,
            loader:['url-loader?limit=100000'] 
        },
        {
            test:/\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            exclude: /node_modules/,  
            include: /client/,
            loader:['file-loader'] 
        }
       ]
   },
   plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery", 
        Popper: 'popper.js/dist/umd/popper.js'       
    })
        ],
   devServer:{
       hot:true,
       port:4800
   }
}

module.exports=config;