import React, {useState} from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import icon from './icon';
import './auth.css';
import Input from './AInput';
import { signin, signup} from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prevShowPasswod) => !prevShowPasswod);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }

        console.log(formData);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        // handleShowPassword(false);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: 'AUTH', data: { result, token}});

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = () => {
        console.log('Google Sign In was unsuccessful. Try Again Later')
    }

  return (
    <div className='main_auth'>
    <div className='auth'>
        <h5 className='head'> { isSignup ? 'Sign Up' : 'Sign in'}</h5>
        <form className='f_auth' action="" onSubmit={handleSubmit}>
            <div className='form_auth'>
                {
                    isSignup && (
                        <>
                        <Input className='input' name='firstName' label ='First Name' type="text" handleChange={handleChange} autoFocus />
                        <Input className='input' name='lastName' label ='Last Name' type="text" handleChange={handleChange} />
                        </>
                    )
                }
                <Input className='Ainput' type="email" name='email' label="Email Address" handleChange={handleChange} />
                <Input className='Ainput' name='password' handleChange={handleChange} type={showPassword ? "text" : "password"} label="Password" handleShowPassword={handleShowPassword} />
                { isSignup && <Input className='input' name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
            </div>
            <button className='btn_auth' type='submit'>{ isSignup ? 'Sign up' : 'Sign in'}</button>
            <div>
                <button className='btn_auth 1' onClick={switchMode}>{isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}</button>
            </div>
            {/* <GoogleLogin render={(renderProps) => (<button className='googleButton' onClick={renderProps.onClick} disabled={renderProps.disabled} icon={<icon/>} variant="contained">Google Sign In</button>)} onSuccess={googleSuccess} onFailure={googleFailure} cookiePolicy='single_host_origin' /> */}
        </form>
    </div>
    </div>
  )
}

export default Auth;