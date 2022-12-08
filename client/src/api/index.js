import axios from 'axios';

// const url = 'http://localhost:5000/students';
const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchStudents = () => API.get('/students');
export const createStudent = (newStudent) => API.post('/students', newStudent);
export const updateStudent = (id, updatedStudent) => API.patch(`/students/${id}`, updatedStudent);
export const deleteStudent = (id) => API.delete(`/students/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);