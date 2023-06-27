import Nav from './Nav';
import './App.css';
import Foodbar from './Foodbar';
import Sidebar from './Sidebar';
import Down from "./Down";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='Downcomp'>
        
        <div className='Hero'>
          <Foodbar />
          <div>
            <Nav />
          </div> 
        </div>
        <Down />
      </div>
    </div>
  );
}

export default App;
