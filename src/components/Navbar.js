import axios from "axios";
import "../App.css";

function Navbar(props){
    return(
        <div className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-h1">Welcome to the Home Page</h1>
            </div>
            <div className="navbar-right">
                <button className="navbar-btn" onClick={props.handleLogout}>Current Week</button>
                <button className="navbar-btn" onClick={props.handleLogout}>Current Day</button>
                <button className="navbar-btn" onClick={props.handleLogout}>Profile</button>
                <button className="navbar-btn" onClick={props.handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;