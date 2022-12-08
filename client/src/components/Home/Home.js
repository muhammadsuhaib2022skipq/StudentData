import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { getStudents } from '../../actions/students';

import './styles.css';
import Students from '../Students/Students';
import Form from '../Form/Form';

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getStudents());
    }, [ currentId, dispatch]);

  return (
    <div className='main-container'>
      <div className='form'>
        <Form currentId={currentId} setCurrentId = {setCurrentId} />
      </div>
      <div className='student'>
        <Students setCurrentId = {setCurrentId} />
        </div>
    </div>
  )
}

export default Home