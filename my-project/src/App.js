import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import DottedBackground from './components/HeaderComponents/DotBackground';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <DottedBackground />
      <Routes>
        {/* La ruta principal / renderiza el componente About */}
        <Route path="/" element={<About />} />
        {/* Ruta para el Blog */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
