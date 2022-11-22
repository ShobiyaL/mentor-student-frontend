import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListAll from './pages/ListAll';
import CreateMentor from './pages/CreateMentor'
import CreateStudent from './pages/CreateStudent'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
          <Route path='/' element={<ListAll/>}/>
          <Route path='/create-mentor' element={<CreateMentor/>}/>
          <Route path='/create-student' element={<CreateStudent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
