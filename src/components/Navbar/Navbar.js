import { FaBars, FaSearch, FaRegClock, FaRegUser } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
    const navIcon = {  color: '#a5aaad', size: '26px'}
    const navright = { padding: "5px 5px", margin: "0px 3px", color: '#a5aaad', borderRadius: "50px", background: "#ffffff", boxShadow: "2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff" }
    return (
        <div className="navbar">
            <div className="nav-icon" >
                <FaBars style={{ className: "nav-icon" }} />
            </div>
            <div className="navbar-left">
                <a >Subscribers</a>
                <a >Video Managment</a>
                <a >Admin</a>
            </div>
            <div className="navbar-right">
                <FaSearch style={navright} />
                <FaRegClock style={navright}/>
                <FaRegUser style={navright}/>
            </div>
        </div>
        )
}

export default Navbar