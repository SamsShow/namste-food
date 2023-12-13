import React from 'react';
import resList from '../data/carddata';
import RestaurantCard from '../components/Resturantcards.jsx';


export default function Body() {
  return (
    <div className=''>
        <div className=''>
            <div className=''>
            <input className='p-3 border-solid border-[1px] rounded-lg m-3' type='text' placeholder='Search for Restaurants or Cuisines' />
            <button>Find Food</button>
            </div>
        </div>
        <div className='flex flex-wrap gap-2'>
          {
            resList.map(resturant => <RestaurantCard key={resturant.id} {...resturant} />)
          }
        </div>
    </div>
  );
}