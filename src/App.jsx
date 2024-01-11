import React, {Suspense,lazy} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import ResturantMenu from './components/ResturantMenu.jsx';
// import Grocery from './components/grocery.jsx';


//Chunking
// Code Splitting - Splitting the code into smaller chunks
// Dynamic Building - Building the chunks dynamically
// Lazy Loading - Loading the chunks only when required
// On Demand Loading - Loading the chunks on demand

const Grocery = lazy(() => import('./components/Grocery.jsx'));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="grocery" element={<Suspense fallback={<div>Loading Grocery...</div>}><Grocery /></Suspense>} />
          <Route path="menu/:resID" element={<ResturantMenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}
