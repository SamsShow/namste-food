import React from 'react';
import resList from '../data/ResturantCard';

const RestaurantCard = (props) => {

  const{
    name,
    cuisine,
    rating,
    time,
    image
  } = {...props}
  
  return (
    <div className='w-48 m-2 h-auto p-2 border-solid border-2 cursor-pointer border-zinc-500  transition-all hover:scale-105 hover:shadow-lg'>
      <img className='p-1 ' src={image} alt="bowl" />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h5>{rating} stars</h5>
      <h5>{time} minutes</h5>
    </div>
  )
}

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