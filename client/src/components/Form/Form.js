import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudent, updateStudent } from "../../actions/students";

import './styles.css';

const Form = ({ currentId, setCurrentId }) => {
    const [studentData, setStudentData] = useState({ rollNumber: '', name: '', class: '', phoneNumber: ''})
    const student = useSelector((state) => currentId ? state.students.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(student) setStudentData(student);
    }, [student])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId){
            dispatch(updateStudent(currentId, studentData))

        } else {
            
            dispatch(createStudent(studentData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setStudentData({ rollNumber: '', name: '', class: '', phoneNumber: ''});
    }

    return (
        <div className="student-box">
            <h2>{currentId ? 'Updating' : 'Creating'} Student</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="user-box">
                    <input value={studentData.rollNumber} onChange={(e) => setStudentData({ ...studentData, rollNumber: e.target.value })} type="text" placeholder="Roll Number" required/>
                </div>
                <div className="user-box">
                    <input value={studentData.name} onChange={(e) => setStudentData({ ...studentData, name: e.target.value })} type="text" placeholder="Name" required/>
                </div>
                <div className="user-box">
                    <input value={studentData.class} onChange={(e) => setStudentData({ ...studentData, class: e.target.value })} type="text" placeholder="Class" required/>
                </div>
                <div className="user-box">
                    <input value={studentData.phoneNumber} onChange={(e) => setStudentData({ ...studentData, phoneNumber: e.target.value })} type="text" placeholder="Phone Number" required/>
                </div>
                <div className="btn">
                    <button type="submit">Submit</button>
                    <button onClick={clear}>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default Form;