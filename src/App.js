import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Project from './pages/Project';
import Category from './pages/Category';
import './index.css';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // if ('scrollRestoration' in window.history) {
    //   window.history.scrollRestoration = 'manual'; 
    // }

    window.scrollTo(0, 0);  
  }, [pathname]);

  return null;
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/:id' element={<Category />} />
        <Route path='/:categoryId/:subprojectId' element={<Project />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='layout'>
        <Navbar />
        <div className='content'>
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;