import { useState } from 'react';
import SignUp from './SignUp';
import axios from 'axios';
import '../App.css';


function LoginForm() {
    const [userName, setUserName] = useState('');
    const [userSecret, setuserSecret] = useState('');
    const [error, setError] = useState('');
    const [signup, setSignup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'username': userName, 'password': userSecret };
        try {
            const resp = await axios.post('http://localhost:4000/users/login', authObject);
            console.log(resp.date, 'is resp LOGIN')
            localStorage.setItem('clarityUser', resp.data.user);
            localStorage.setItem('birthdate', resp.data.birthdate);
            // localStorage.setItem('password', userSecret);
            console.log('user logged in')
            window.location.reload();
            setError('');
        } catch (error) {
            setError('Oops! Invalid Cridentials');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                {signup ? <SignUp signup={signup} setSignup={setSignup} /> : (
                    <div className="login">
                        <h1 className="title">Clarity</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='input' placeholder='Username' required />
                            <input type="password" value={userSecret} onChange={(e) => setuserSecret(e.target.value)} className='input' placeholder='Password' required />
                            <div className="center">
                                <button type="submit" className="button">
                                    <span>Login</span>
                                </button>
                            </div>
                            <h2 className='error'>{error}</h2>
                        </form>
                        <h3>Don't have an account?</h3>
                        <button className="toggle-btn" onClick={() => setSignup(true)}><span>Signup</span></button>
                    </div>
                )
                }

            </div>
        </div>
    )
}

export default LoginForm;