import axios from 'axios';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import Weeks from './Weeks';
import '../App.css';

function HomePage() {
    const [userAge, setUserAge] = useState(0);
    const [showWeeks, setShowWeeks] = useState(false);

    function handleLogout(e) {
        e.preventDefault();
        console.log(localStorage, 'is local storage BEFORE')
        localStorage.clear();
        const resp = axios.get('localhost:4000/logout');
        console.log(resp, 'is resp')
        console.log(localStorage, 'is local storage AFTER')
        window.location.reload();
    }

    // let age = 0;

    useEffect(() => {
        // calculateAge(localStorage.getItem('birthdate'), new Date());
        function calculateAge(birthDate = localStorage.getItem('birthdate'), otherDate = new Date()) {
            birthDate = new Date(birthDate);
            console.log(birthDate, otherDate.getFullYear(), 'is birthdate and otherdate')

            let age = (otherDate.getFullYear() - birthDate.getFullYear());

            if (otherDate.getMonth() < birthDate.getMonth() ||
                (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
                age--;
            }

            setUserAge(age);
        }
        calculateAge();
    }, []);

    console.log(userAge, 'is user age')

    return (
        <div className='homepage'>
            <Navbar handleLogout={handleLogout} />
            <div className='homepage-info'>
                <h1 className='homepage-h1'>80 years</h1>
                <p className='homepage-here-p'>You are here <span className="homepage-here"></span></p>
            </div>
            {showWeeks === false ? <div className="years">
                {[...Array(80)].map((e, i) => {
                    return (
                        <div key={i}
                            onClick={i + 1 >= userAge ? () => setShowWeeks(true) : () => console.log('disabled')}
                            className="year"
                            style={{ background: i + 1 === userAge ? '#d6b8fc' : i + 1 < userAge ? "#A6A6A6" : 'white' || i + 1 > userAge ? 'white' : '#A6A6A6' }}
                        />
                    )
                })}
            </div>
                : <Weeks props={{ showWeeks, setShowWeeks }} />}
        </div>
    )
}

export default HomePage;