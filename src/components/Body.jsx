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
    <div className='w-48 m-2 h-auto p-2 border-solid border-2 cursor-pointer border-zinc-500  transition-all hover:scale-105 hover:shadow-lg'>
      <img className='p-1 ' src={image} alt="bowl" />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h5>{rating} stars</h5>
      <h5>{time} minutes</h5>
    </div>
  )
}

const resList= [
    {
      "id": 1,
      "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "The Spicy Wok",
      "cuisine": "Chinese",
      "rating": 4.8,
      "time": "20-30 mins"
    },
    {
      "id": 2,
      "image": "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Nonna's Pizza",
      "cuisine": "Italian",
      "rating": 4.5,
      "time": "30-40 mins"
    },
    {
      "id": 3,
      "image": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "The Burger Joint",
      "cuisine": "American",
      "rating": 4.7,
      "time": "25-35 mins"
    },
    {
      "id": 4,
      "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Sushi Delight",
      "cuisine": "Japanese",
      "rating": 4.3,
      "time": "35-45 mins"
    },
    {
      "id": 5,
      "image": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Taco Fiesta",
      "cuisine": "Mexican",
      "rating": 4.2,
      "time": "20-30 mins"
    },
    {
      "id": 6,
      "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "The Curry House",
      "cuisine": "Indian",
      "rating": 4.6,
      "time": "30-40 mins"
    },
    {
      "id": 7,
      "image": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Flavors of the World",
      "cuisine": "International",
      "rating": 4.9,
      "time": "35-45 mins"
    },
    {
      "id": 8,
      "image": "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "The Poke Stop",
      "cuisine": "Hawaiian",
      "rating": 4.4,
      "time": "25-35 mins"
    },
    {
      "id": 9,
      "image": "https://images.unsplash.com/photo-1497888329096-51c27beff665?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Noodle Nation",
      "cuisine": "Asian",
      "rating": 4.1,
      "time": "30-40 mins"
    },
    {
      "id": 10,
      "image": "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1419&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "The Green Grocer",
      "cuisine": "Vegetarian",
      "rating": 4.8,
      "time": "20-30 mins"
    }    
]

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