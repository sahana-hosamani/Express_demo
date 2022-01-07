//app.set and app.get program
var express =require('express');
var app = express();
app.set('student','Student');
app.set('admin', 'Admin');
app.use('/student',function(req,res){
     res.send('Welcome to Express JS-' + app.get('student'));
});

app.use('/admin',function(req,res){
      res.send('Welcome to Express JS-' + app.get('admin'));
});
    
app.listen(3000);
console.log('Server Started!');