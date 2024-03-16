import React from 'react'
import "./Login.css";
const Login = () => {
    return (
        <>
            <div className="login-container">
                <div className='login-title'>
                    <h1>Login</h1>
                </div>
                <div className='line'></div>
                <div className='login-form'>
                    <form>
                        <div className='name'>
                            <label >
                                <input type="text" name="usernamae" placeholder='Username' />
                            </label>
                        </div>
                        <div className='login-pass'>
                            <label>
                                <input type="password" name="Password" placeholder='password' />
                            </label>
                        </div>
                       <p className='ForgetPass' >Forgot password ?</p>
                        <div className='button-login'>
                            <button type="submit" name="Login">Login</button>
                        </div>
                        <p className='namember'>Not a Member ? <span> Signup </span></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;
