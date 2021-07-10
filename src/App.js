import './App.css';
import Navbar from './components/Navbar/Navbar'
import MainContainer from './components/MainContainer/MainContainer'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
      <div className="container">
          <Navbar />
          <MainContainer />
          <SideBar />
    </div>
  );
}

export default App;
