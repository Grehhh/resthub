const express = require("express");
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req,res) => res.send('Hello world'));

app.listen(port, function() {
    console.log("Running RestHub on port " + port);
})