import React from "react";
import { useSelector } from 'react-redux';

import Student from "./Student/Student";

const Students = ({ setCurrentId }) => {
    
    const students = useSelector((state) => state.students);

    console.log(students);

    return (
        <div className="container">
            {students.map((student) => (
                <div key={student._id}>
                    <Student student = {student} setCurrentId = {setCurrentId} />
                </div>
            ))}
        </div>
    );
}

export default Students;