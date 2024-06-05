import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// Pages
import Home from './pages/home';
import Dancer from './pages/dancer';
// Components
import Header from './components/header';
// Styles
import './App.scss';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 20);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Header />
      {loading && <div className='loading'>Loading...</div>}
      <AnimatePresence initial={false} mode='wait'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dancer/:id' element={<Dancer loading={loading} />} />
        </Routes>
        </AnimatePresence>
    </>
  );
}

export default App;
