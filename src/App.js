import React from 'react';
import './App.css';
import RPS from './pages/RPS'
import MemoryPuzzle from './pages/MemoryPuzzle'
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import HomePage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>

          <Route path='/rps' element={<RPS/>}/>
          <Route path='/mp' element={<MemoryPuzzle/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;