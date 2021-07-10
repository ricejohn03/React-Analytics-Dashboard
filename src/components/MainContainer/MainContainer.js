import SVG from '../../images/svg-1.svg'
import './MainContainer.css'
import MainCards from '../MainCards/MainCards'
import ChartScreen from '../ChartScreen/ChartScreen'
import Footer from '../Footer/Footer'

const MainContainer = () => {
    return (
        <div className="main-container">
            <div className="main-title">
                <img src={SVG} />
                <div className="main-greeting">
                    <h1>Hello John,</h1>
                    <p>Welcome to you admin dashbord</p>
                </div>
            </div>
            <MainCards />
            <ChartScreen />
            <Footer/>
        </div>
        )
}

export default MainContainer;