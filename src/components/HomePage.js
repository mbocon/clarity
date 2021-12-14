import axios from 'axios';
import Navbar from './Navbar';
import '../App.css';

function HomePage() {
    function handleLogout(e) {
        e.preventDefault();
        console.log(localStorage, 'is local storage BEFORE')
        localStorage.clear();
        const resp = axios.get('localhost:4000/logout');
        console.log(resp, 'is resp')
        console.log(localStorage, 'is local storage AFTER')
        window.location.reload();
    }
    return (
        <div className='homepage'>
            <Navbar handleLogout={handleLogout} />
            <div className='homepage-info'>
                <h1 className='homepage-h1'>80 years</h1>
                <p className='homepage-here-p'>You are here <span className="homepage-here"></span></p>
            </div>
            <div className="years">
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            <div className="year"></div>
            </div>
        </div>
    )
}

export default HomePage;