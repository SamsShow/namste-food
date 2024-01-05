import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import ResturantMenu from './components/ResturantMenu.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu/:resID" element={<ResturantMenu />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
