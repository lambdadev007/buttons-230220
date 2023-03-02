import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Page1 from "./pages/Page1.js";
import Page2 from "./pages/Page2.js";
import Page3 from "./pages/Page3.js";
import Page4 from "./pages/Page4.js";
import Page5 from "./pages/Page5.js";



function App() {
  return (
    <Router>
      <div className="App">
          <h2 style={{marginTop:'50px'}}>React Components</h2>
          <nav className="">
            <ul className="" style={{display:'flex', listStyleType:'none'}}>
              <li><Link to={'/'} className="nav-link"> Page1 </Link></li>
              <li><Link to={'/page2'} className="nav-link">Page2</Link></li>
              <li><Link to={'/page3'} className="nav-link">UsingTextPath</Link></li>
              <li><Link to={'/page4'} className="nav-link">TrigonometricFunctions</Link></li>
              <li><Link to={'/page5'} className="nav-link">Loader</Link></li>
            </ul>
          </nav>
          <Routes>
              <Route exact path='/' element={<Page1 />} />
              <Route path='/page2' element={<Page2 />} />
              <Route path='/page3' element={<Page3 />} />
              <Route path='/page4' element={<Page4 />} />
              <Route path='/page5' element={<Page5 />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
