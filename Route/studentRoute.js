const express = require('express');
const router = express.Router();

const getStudents = router.get('/', (req, res) => {
    res.json({
        name: "ashish jaiswal"
    })
})
const getStudentById = router.get('/:id', (req, res) => {
    res.json({
        name: "ashish jaiswal"
    })
})
const deleteStudentById = router.delete('/"id', (req, res) => {
    res.json({
        name: "ashish jaiswal"
    })
})
const saveStudent = router.post('/', (req, res) => {
    res.json({
        name: "ashish jaiswal"
    })
})
const updateStudent = router.put('/:id', (req, res) => {
    res.json({
        name: "ashish jaiswal"
    })
})

module.exports = getStudents;