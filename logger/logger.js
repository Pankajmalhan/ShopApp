var winston = require('winston');
var path=require('path');
winston.configure({
    transports: [
      new (winston.transports.File)({ filename: path.join(__dirname,'logger.txt') })
    ]
  });
var logger=function(data){
    winston.log('info', data)
}

module.exports=logger;
