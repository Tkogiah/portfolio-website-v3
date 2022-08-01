import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/About';
import Homepage from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



import './components/styles.css';


export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

