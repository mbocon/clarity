import { useState } from "react";
import axios from "axios";
import '../App.css';

function SignUp(props) {
    console.log(props, 'are signup  props')
    const [userName, setUserName] = useState('');
    const [userSecret, setuserSecret] = useState('');
    const [userBirthday, setUserBirthday] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'username': userName, 'password': userSecret, 'birthdate': userBirthday };
        try {
            const resp = await axios.post('http://localhost:4000/users', authObject);
            console.log(resp, 'is resp')
            localStorage.setItem('user', resp.data.user);
            localStorage.setItem('birthdate', resp.data.birthdate);
            // localStorage.setItem('password', userSecret);
            console.log('user created')
            window.location.reload();
            setError('');
        } catch (error) {
            setError('Oops! Something went wrong');
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Signup</h1>
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='input' placeholder='Username' required />
                        <input type="password" value={userSecret} onChange={(e) => setuserSecret(e.target.value)} className='input' placeholder='Password' required />
                        <label htmlFor="birthday">
                            <span className="birthday">Birthday</span><input id="birthday" type="date" value={userBirthday} onChange={(e) => setUserBirthday(e.target.value)} className="input" required />
                        </label>
                        <div className="center">
                            <button type="submit" className="button">
                                <span>Signup</span>
                            </button>
                        </div>
                        <h2 className='error'>{error}</h2>
                    </form>
                    <h3>Already have an account?</h3>
                    <button className="toggle-btn" onClick={() => props.setSignup(!props.signup)}><span>Login</span></button>
                </div>



            </div>
        </div>

    )
}

export default SignUp;
