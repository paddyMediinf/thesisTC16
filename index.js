var express = require('express');
var app = express();

const PORT = 82

const password = "sample password";
const user = "sample user"

app.get('/', function(req,res){
    res.send('Hello World!\n\t'+
    'coded credentials are user '+user+', password '+password);
});

app.listen(PORT, function (){
    console.log('app listen on port '+PORT)
})