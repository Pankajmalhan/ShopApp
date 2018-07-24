var express=require('express');
var path=require('path');
var routes = require('./server/appServer'); 
var app=express();
var webpack= require('webpack');
var config= require('./webpack.config');
const compiler = webpack(config);
var bodyParser=require('body-parser');
var logger=require('./logger/logger');
var port=5500;
var multer=require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/assets/uploads')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now()+file.originalname )
    }
  });
var upload = multer({ storage: storage});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "POST");
    next();
  });

app.use('/api',routes);
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, './client/index.html'));
});
app.get('/products/:id',function(req,res){
    res.sendFile(path.join(__dirname, './client/index.html'));
});
app.get('/register-user',function(req,res){
    res.sendFile(path.join(__dirname, './client/index.html'));
});

app.get('/login-user',function(req,res){
    res.sendFile(path.join(__dirname, './client/index.html'));
});

app.get('/orders',function(req,res){
    res.sendFile(path.join(__dirname, './client/index.html'));
});
app.use('/',express.static(__dirname+'/client'));

app.use(function (err, req, res, next) {
    logger(err);
    res.send('OOPS!! Error is generted app');
});
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.listen(port,function(error){
    if(error) {
        console.log(error);
    } else {
        console.log("Application running on port: "+port);
    }
})

module.exports=app;


