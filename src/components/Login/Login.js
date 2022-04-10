import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import GoogleLogo from './../../img/google.svg'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p style={{ textAlign: 'center', margin: '0' }}>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
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

export default Login;