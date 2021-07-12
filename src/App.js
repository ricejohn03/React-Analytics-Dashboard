import './App.css';
import Navbar from './components/Navbar/Navbar'
import MainContainer from './components/MainContainer/MainContainer'
import SideBar from './components/SideBar/SideBar'
import { useState } from 'react'

function App() {
    const [togglenav, setToggleNav] = useState(false)
    const printandtoggle = () => {
        console.log(togglenav)
        setToggleNav(!togglenav)
    }
    console.log(togglenav)
  return (
      <div className="container">
          <Navbar togglenav={togglenav} setToggleNav={setToggleNav} />
          <MainContainer />
          <SideBar togglenav={togglenav} setToggleNav={setToggleNav} />
    </div>
  );
}

export default App;
