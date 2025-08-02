import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ZodiacForm from './components/ZodiacForm';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ZodiacForm />} />
        <Route path="/result/:signo" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;