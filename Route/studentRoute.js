const express = require('express');
const router = express.Router();

const getStudents = router.get('/', (req, res) => {
    res.json({
        name: "ashish jaiswal"
    })
})
module.exports = getStudents;