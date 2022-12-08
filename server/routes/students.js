import express from "express";

import { getStudents, createStudent, updateStudent, deleteStudent } from "../controllers/students.js";
import auth from "../middleware/auth.js";
const router = express.Router();

// http://localhost:5000/students  We set /students prefix to all students url.

router.get('/', getStudents);
router.post('/', auth, createStudent);
router.patch('/:id', auth, updateStudent)
router.delete('/:id', auth, deleteStudent)

export default router;