import React from 'react';
import "./signup.css";
import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login'; // Assuming the correct file name is 'Login'

const Signup = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    }
    return (
        <Router>
            <div className='container'>
                <div className='signup-title'>
                    <h1>Sign Up</h1>
                </div>
                <div className='signupform'>
                    <div className='signup-form'>
                        <form>
                            <div className='name'>
                                <label >
                                    <input type='text' name="first-name" placeholder='First Name' required />
                                </label>
                                <label>
                                    <input type='text' name="last-name" placeholder='Last Name' required />
                                </label>
                            </div>
                            <div className='email '>
                                <label>
                                    <p>Email :</p>
                                    <input type='email' name="email" placeholder='FarmerTechub@gmail.com' required />
                                </label>
                            </div>
                            <div className='dob'>
                                <label>
                                    <p>Date of Birth :</p>
                                    <input type='date' name="date" required />
                                </label>
                            </div>
                            <div className='location'>
                                <label>
                                    <p>State :</p>
                                    <input type='text' name="state" required />
                                    <p>City :</p>
                                    <input type='text' name="City" required />
                                </label>
                            </div>
                            <div className='password'>
                                <label>
                                    <input type='password' name="password" placeholder='Password' required />
                                </label>
                                <label className='cnfpassword'>
                                    <input type='password' name="confirm-password" placeholder='confirm Password' required />
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className='submit-button'>
                        <button type='submit' className='signup-submit'>submit</button>
                    </div>
                    <div>
                        <p>
                            All ready have Account? <span onClick={handleLoginClick}><Link to="/login">Login</Link></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Define Routes */}
            <Routes>
                <Route exact path="/login" element={showLogin ? <Login /> : null} />
            </Routes>
        </Router>
    )
}

export default Signup;
