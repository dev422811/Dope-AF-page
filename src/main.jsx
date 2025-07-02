// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* Add other routes */}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
