import { FaCalendarDay, FaRegUserCircle, FaCamera, FaThumbsUp } from 'react-icons/fa'
import './MainCards.css'

const MainCards = () => {
    return (
        <div className="main-cards" >

            <div className="card">
                <div className="card-inner">
                    <FaRegUserCircle size={45} style={{ color: "#4dc3ff" }} />
                    <p className="text-primary-p">Number of Subscribers</p>
                    <span className="font-bold text-title"> 578 </span>
                </div>
            </div>

            <div className="card">
                <div className="card-inner">
                    <FaCalendarDay size={45} style={{ color: " #ff8080" }} />
                    <p className="text-primary-p">Times of Veiwing</p>
                    <span className="font-bold text-title"> 67578 </span>
                </div>
            </div>

            <div className="card">
                <div className="card-inner">
                    <FaCamera size={45} style={{ color: " #ffd966" }} />
                    <p className="text-primary-p">Number of Videos</p>
                    <span className="font-bold text-title"> 339 </span>
                </div>
            </div>

            <div className="card">
                <div className="card-inner">
                    <FaThumbsUp size={45} style={{ color: " #85e085" }} />
                    <p className="text-primary-p">Number of Likes</p>
                    <span className="font-bold text-title"> 645 </span>
                </div>
            </div>
          
        </div>
        )
}

export default MainCards