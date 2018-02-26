/**
 * Created by z on 2/26/18.
 */
const express = require('express');
const app = express();

app.use(express.static('build'));
app.set('views', './build');

app.get('/', function(req, res){
    res.sendFile(`${process.cwd()}/build/index.html`)
});

app.listen(2400, function(){
    console.log('Example app listening on port 3000!')
});