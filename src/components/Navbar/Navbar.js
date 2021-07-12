import { FaBars, FaSearch, FaRegClock, FaRegUser } from "react-icons/fa";
import './Navbar.css'

const Navbar = ({ togglenav, setToggleNav }) => {
    const navIcon = {  color: '#a5aaad', size: '26px'}
    const navright = { padding: "5px 5px", margin: "0px 3px", color: '#a5aaad', borderRadius: "50px", background: "#ffffff", boxShadow: "2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff" }

    return (
        <div className="navbar">
            <div className="nav-icon" onClick={() => setToggleNav(!togglenav)} >
                <FaBars style={{ className: "nav-icon", cursor:'pointer'}} />
            </div>
            <div className="navbar-left">
                <a >Subscribers</a>
                <a >Video Managment</a>
                <a >Admin</a>
            </div>
            <div className="navbar-right">
                <FaSearch style={navright} />
                <FaRegClock style={navright}/>
                <img className='you-icon' src="https://media-exp3.licdn.com/dms/image/C5603AQEC89fm0Y7hug/profile-displayphoto-shrink_200_200/0/1517512304001?e=1631750400&v=beta&t=Ia_SOWJzYynnnS0L-dLYhDXCY7w2Zv5PC0FyduXo3qU"/>
            </div>
        </div>
        )
}

export default Navbar