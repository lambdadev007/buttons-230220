import { useEffect } from 'react';
import './App.css';
import ButtonGrid from "./components/ButtonGrid";
import Hamburger from "./components/Hamburger";
import StarsRating from "./components/StarsRating";

function App() {
  return (
    <div className="App">
      <div className='button-container'>
        <ButtonGrid />
        <ButtonGrid gridTitle="Grid" listTitle="List" />
      </div>
      <div className = "hamburger" style={{marginTop : '30px'}}>
        <Hamburger />
      </div>
      <div className = "StarsRating" style={{marginTop : '30px'}}>
        <StarsRating />
      </div>

    </div>
  );
}

export default App;
