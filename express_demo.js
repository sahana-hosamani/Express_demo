var express =require('express');
var app = express();
//app.use(function(req,res){
  //  res.send('Welcome to Express JS');

//});
app.use('/student',function(req,res){
     res.send('Welcome to Express JS-Student');
});

app.use('/admin',function(req,res){
      res.send('Welcome to Express JS-Administrator');
});
  
  

app.listen(3000);
console.log('Server Started!');