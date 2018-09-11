const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
  res.send('Hello world!');
});

app.listen(3000,()=>{
  console.log('The serever.js is running on Port 3000');
});
