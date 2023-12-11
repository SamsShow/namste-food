import React from 'react';

const RestaurantCard = (props) => {
  return (
    <div className='w-48 m-2 h-auto p-2 transition-all hover:scale-105 hover:shadow-lg'>
      <img className='p-1 ' src={props.url} alt="bowl" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h5>{props.rating} stars</h5>
      <h5>{props.time} minutes</h5>
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
          < RestaurantCard 
          url="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          resName="Meghna Food" cuisine="Biryani,North India,Asian" rating="4.4" time="38"
          />
          < RestaurantCard 
          url="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          resName="Delite Bowl" cuisine="Egg Curry,North India,Asian" rating="4.6" time="18"
          />
        </div>
        

    </div>
  );
}