import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';


import './components/styles.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

