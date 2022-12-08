import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './styles.css';

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);

    const logout = () => {
        dispatch({ type: 'LOGOUT'});

        // navigate('/');
        navigate('/auth');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

  return (
        <nav className="App">
            {/* <Link className='link' to="/">List of Students</Link> */}
            <h5 className='link'>List of Students</h5>
            <div className=''>
                {user ? (
                    <div className='profile_name'>
                        {/* <img src={user.result.imageUrl} alt={user.result.name} />  */}
                        {/* user.result.name.charAt(0) */}
                        <h3 className=''>{user.result.name}</h3>
                        <button className='logout' onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <Link className='link_auth' to = "/auth">Login</Link>
                )}
            </div>
        </nav>
  )
}

export default Navbar;