const express = require('express');
const app = express();
const getStudents = require('./Route/studentRoute');
const port = require('./constant')

app.listen(port, () => {
    console.warn("connnected")
});
app.use('/student/', getStudents);

