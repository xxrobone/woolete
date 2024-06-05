import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// Pages
import Home from './pages/home';
import Model from './pages/model';
// Components
import Header from './components/header';
// Styles
import './App.scss';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Header />
      {loading && <div className="loading">Loading...</div>}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/model/:id' element={<Model loading={loading} />} />
      </Routes>
    </>
  );
}

export default App;
