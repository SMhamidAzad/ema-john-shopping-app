import React, { useState } from 'react';
import './SignUp.css'
import GoogleLogo from './../../img/google.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init'

const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpass,setConfirmPass]=useState('')
    const [error,setError]=useState('')

    const [createUserWithEmailAndPassword, hookError,user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPassBlur = event =>{
        setConfirmPass(event.target.value)
    }
    if(user){
       navigate('/shop')
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password!==confirmpass){
            setError('Your two passwords did not match')
        }
        if(password.length<6){
            setError('password must be 6 character or longer')
            return;
        }
        createUserWithEmailAndPassword(email,password)
       
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <p style={{color: 'red'}}>{hookError}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p style={{ textAlign: 'center', margin: '0' }}>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <div className='line-container'>
                    <div className='form-line'>

                    </div>
                    <span>
                        or
                    </span>
                    <div className='form-line'>

                    </div>
                </div>
                <button className='form-btn'>
                    <img src={GoogleLogo} alt="" />
                    Continue with Google
                </button>

            </div>
        </div>
    );
};

export default SignUp;