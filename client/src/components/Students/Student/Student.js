import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

import { deleteStudent } from "../../../actions/students";
import './styles.css';

const Student = ({student, setCurrentId}) => {
  const dispatch = useDispatch();

    return (
  <div className="table_student">
    <table>

      <thead>
        <tr>
          <th>R-Number</th>
          <th>Name</th>
          <th>Class</th>
          <th>Ph-Number</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{student.rollNumber}</td>
          <td>{student.name}</td>
          <td>{student.class}</td>
          <td>{student.phoneNumber}</td>
          <td>
            <span className="action_btn">
              <button onClick={() => setCurrentId(student._id)} ><UpdateIcon/></button>
              <button onClick={() => dispatch(deleteStudent(student._id))} ><DeleteIcon/></button>
            </span>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
    );
}

export default Student;