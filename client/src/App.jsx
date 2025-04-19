import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog"; // ✅
import BlogPost from "./components/BlogPost"; // ✅ sau ./pages/BlogPost dacă nu e mutat încă
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        <WhatsAppButton />
        {/* Footer component can be added here if needed */}
    </Router>
  );
}

export default App;
