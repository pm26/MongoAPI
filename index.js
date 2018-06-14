var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mroute=require("./mroutes/mroute");


app.use(bodyParser.json());
app.use("/mongo-api",mroute);
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/capgemini');

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
console.log("mongoo db connection is open");
});

app.listen("4780",function(){
    console.log("console is runnning on 4780");
});

