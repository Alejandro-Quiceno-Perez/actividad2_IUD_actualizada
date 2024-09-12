const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get('/', (req, res) => {
       res.send('Hello World');
})

//mongo db conection 
mongoose.connect('')


app.listen(port, () => console.log('Server Listening on port' , port));

//  User: alejandroquiceno
// Password: etolia5Z2URNI0Ej
// IP: 177.255.144.191