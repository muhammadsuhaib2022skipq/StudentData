import mongoose from "mongoose";
import StudentData from "../models/studentData.js"

export const getStudents = async (req, res) => {
    try {
        const studentData = await StudentData.find();

        res.status(200).json(studentData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStudent = async (req, res) => { 
    const { id } = req.params;

    try {
        const student = await StudentData.findById(id);
        
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    const student = req.body;

    const newStudent = new StudentData({...student, creator: req.userId});
    try {
        await newStudent.save();
        
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateStudent = async (req, res) => {
    const { id:_id } = req.params;
    const student = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Student with this id');
    
    const updatedStudent = await StudentData.findByIdAndUpdate(_id, { ...student, _id}, {new: true});
    
    res.json(updatedStudent);
}

export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Student with this id');

    await StudentData.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' })

}