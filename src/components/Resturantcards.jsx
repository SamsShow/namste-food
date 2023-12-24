import React from 'react';

const RestaurantCard = (props) => {

    const{
      name,
      cuisine,
      rating,
      time,
      image
    } = {...props}
    
    return (
      <div className="w-48 m-2 h-auto p-2 border-solid border-2 cursor-pointer border-zinc-500  transition-all hover:scale-105 hover:shadow-lg">
        <img className="p-1 " src={image} alt="bowl" />
        <div className='bg-zinc-900 text-white p-3 mt-1 hover:scale-95 transition-all '>
          <h3>{name}</h3>
          <h4>{cuisine}</h4>
          <h5>{rating} stars</h5>
          <h5>{time} minutes</h5>
        </div>
      </div>
    );
  }

export default RestaurantCard;