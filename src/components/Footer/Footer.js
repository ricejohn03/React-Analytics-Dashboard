import { FaLaptopCode, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-content'>
               
                <div className="social-links">
                    <IconContext.Provider value={{ className: "social-link" }}>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </IconContext.Provider>
                </div>
               
                <div className="copy">
                    <h5>InfuenceByte &copy; all rights reserved</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer