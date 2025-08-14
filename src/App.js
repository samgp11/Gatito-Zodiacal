import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ZodiacForm from "./components/ZodiacForm/ZodiacForm";
import Result from "./components/Result/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Home bgColor="#f0e5ff" />} 
        />
        <Route 
          path="/form" 
          element={
            <ZodiacForm 
              buttonColor="#6b5b95" 
              buttonHoverColor="#5a497f" 
            />
          } 
        />
        <Route 
          path="/result/:signo" 
          element={<Result titleColor="#ff6f61" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;