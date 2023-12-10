import React from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';

/*
Header
  logo
  Nav Items
Body
  search
  restaurant list
    restaurant cards
      Img
      Name,Star Rating,cuisine,price,delivery time
footers
  copyright
  address
  contact
*/

export default function App() {
  return (
    <div className=''>
      < Header />
      < Body />
    </div>
  );
}
