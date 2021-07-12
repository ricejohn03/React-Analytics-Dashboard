import { FaPowerOff, FaShoppingBag, FaMobileAlt, FaShareSquare, FaTimes, FaHome, FaUserSecret, FaRegBuilding, FaWalking } from 'react-icons/fa'
import './SideBar.css'

const SideBar = ({ togglenav, setToggleNav }) => {

    const style = { color: "white", fontSize: "1.2em", marginRight: "10px", }
    const responsiveNav = togglenav === true ? 'sidebar-resonsive slide-in' : ''

    return (
        <div className={`sidebar ${responsiveNav}`}>
            <div className='sidebar-title'>
                <div className='sidebar-img'>
                </div>
                <h1>Influence<span>Byte</span> </h1>
                <FaTimes className='close-sidebar' size={15} onClick={() => setToggleNav(!togglenav)} />
            </div>

            <div class="sidebar-menu" >
                <div className='sidebar-link active-menu-link'>
                    <FaHome style={style}/>
                    <a> Dashboard </a>
                </div>
                <h2>MGN</h2>
                <div className='sidebar-link'>
                    <FaUserSecret style={style}/>
                    <a>Admin Management </a>
                </div>
                <div className='sidebar-link'>
                    <FaRegBuilding style={style}/>
                    <a>Company Management </a>
                </div>
                <div className='sidebar-link'>
                    <FaWalking style={style}/>
                    <a>Employee Management </a>
                </div>

                <h2>Eng</h2>
                <div className='sidebar-link'>
                    <FaMobileAlt style={style}/>
                    <a>User Engagement </a>
                </div>
                <div className='sidebar-link'>
                    <FaShareSquare style={style}/>
                    <a>Click Throughs </a>
                </div>
                <div className='sidebar-link'>
                    <FaShoppingBag style={style}/>
                    <a>Click To Sales</a>
                </div>
              
            </div>

            <div className="sidebar-logout" >
                <FaPowerOff style={{ color: "#e65061", fontSize: "1.2em", marginRight: "10px" }} />
                <a>Logout</a>
            </div>


        </div>
        )
}

export default SideBar