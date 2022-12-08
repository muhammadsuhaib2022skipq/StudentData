import { FETCH_ALL, DELETE, CREATE, UPDATE } from "../constants/actionTypes";

export default (students = [], action) => {
    switch (action.type) {
        case DELETE:
            return students.filter((student) => student._id !== action.payload);
        case UPDATE:
            return students.map((student) => student._id === action.payload._id ? action.payload : student)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...students, action.payload];
    
        default:
            return students;
    }
}