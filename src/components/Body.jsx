import React from 'react';

const RestaurantCard = () => {
  return (
    <div className='w-48 m-2 h-auto hover:border-[1px] p-1  border-solid border-zinc-500'>
      <img className='p-1' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bowl" />
      <h3>Meghna Food</h3>
      <h4>Biryani,North India,Asian</h4>
      <h5>4.4 stars</h5>
      <h5>38 minutes</h5>
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
        <div className='flex flex-wrap gap-2'>
          < RestaurantCard />
          < RestaurantCard />
        </div>
        

    </div>
  );
}