import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';   // Import Footer
import Home from './pages/Home';
import About from './pages/About';
import NHSProject from './pages/nhs-project';
import NHSLoginProject from './pages/nhs-login-project';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nhs-project" element={<NHSProject />} />



          <Route path="/nhs-login-project" element={<NHSLoginProject />} />
        </Routes>
        <Footer />   {/* Always visible at the bottom */}
      </div>
    </Router>
  );
}

export default App;