const express = require("express");
var path = require('path')
const app = express();
const port = 3000;

app.get('/', function(req,res){
    res.sendFile('index.html', { root: __dirname});
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Listening on port ${port}`));