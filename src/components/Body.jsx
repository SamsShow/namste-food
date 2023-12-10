import React from 'react';

const RestaurantCard = () => {
  return (
    <div className='w-48 h-64 border-[1px] border-black border-solid'>
      <h3>Meghna Food</h3>
    </div>
  )
}

export default function Body() {
  return (
    <div className=''>
        <div className=''>
            <div className=''>
            <input className='p-3' type='text' placeholder='Search for Restaurants or Cuisines' />
            <button>Find Food</button>
            </div>
        </div>
        < RestaurantCard />

    </div>
  );
}