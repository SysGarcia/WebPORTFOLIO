import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import DottedBackground from './components/Shared/DotBackground';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // Determina la página actual basándote en el pathname
  const current_page = location.pathname === "/" ? "About" : location.pathname.substring(1);

  return (
    <>
    
      <Header current_page={current_page} />
      <DottedBackground />
      <main>
        <div className="w-full flex flex-col text-text_primary mx-auto max-w-5xl">
            <div className="mx-6">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
