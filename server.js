const express = require('express');
const app = express();
const getStudents = require('./Route/studentRoute');
const port = require('./constant')
const mongodb = require('mongoose');
const ports = "mongodb://localhost:27017";
mongodb.connect(ports);
app.listen(port, () => {
    console.warn("connnected")
});
app.use('/student/', getStudents);



