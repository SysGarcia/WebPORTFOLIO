import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Studies from './pages/Studies';
import Skills from './pages/Skills';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About to="/about" replace />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
