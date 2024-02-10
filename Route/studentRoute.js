const express = require('express');
const router = express.Router();
const studentSchema = require('../Model/Student');
const Student = require('../Model/Student');
const { default: mongoose } = require('mongoose');

const getStudents = router.get('/', async (req, res) => {
    try {
        const allStudents = await studentSchema.find().lean(); // Use lean() to convert Mongoose documents to plain JavaScript objects
        return res.json(allStudents);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
const deleteStudentById = router.delete('/:id', async (req, res) => {

    try {
        return res.json(await studentSchema.deleteStudentById(req.params.id).lean);
    }
    catch (error) {
        return res.status(500).json({ error: "id is incorrect please try with valid id!!!" });
    }
})
const saveStudent = router.post('/', async (req, res) => {
    try {
        const currentStudent = new Student({
            id: mongoose.Schema.ObjectId,
            name: req.body.name,
            rollNumber: req.body.rollNumber,
            dob: req.body.dob,
            address: req.body.address
        })
        return res.json(await studentSchema.saveStudent(currentStudent).lean());
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})
const updateStudent = router.put('/:id', (req, res) => {
    res.json({
        name: "ashish jaiswal"
    })
})

module.exports = { getStudents, deleteStudentById, saveStudent };