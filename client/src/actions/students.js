import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const getStudents = () => async(dispatch) => {
    try {
        const { data } = await api.fetchStudents();

        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }

    // const action = { type: 'FETCH_ALL', Payload: []}

    // dispatch(action);
}

export const createStudent = (student) => async(dispatch) => {
    try {
        const { data } = await api.createStudent(student);

        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateStudent = (id, student) => async(dispatch) => {
    try {
        const { data } = await api.updateStudent(id, student);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteStudent = (id) => async(dispatch) => {
    try {
        await api.deleteStudent(id);

        dispatch({type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}