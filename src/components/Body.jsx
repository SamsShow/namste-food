import React from "react";
import resList from "../data/carddata";
import RestaurantCard from "../components/Resturantcards.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmerr.jsx";
import useOnlineStatus from "../utils/UseOnlineStatus.jsx";


export default function Body() {
  const [filteredResList, setFilteredResList] = useState(resList);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   fetchData();
  // },[])

  // const fetchData = async () => {
  //   const data = await fetch(

  //   );
  //   const json = await data.json();
  // }

  const filterTopRatedRestaurants = () => {
    const filteredList = resList.filter((res) => res.rating > 4.5);
    setFilteredResList(filteredList);
  };


  const onlineStatus = useOnlineStatus()

  if (!onlineStatus) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-gray-900">You are offline !</h1>
        <h2 className="text-2xl font-bold text-red-900">
          Check your internet connection
        </h2>
      </div>
    );
  }

  return filteredResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="">
        <div className="">
          <input
            className="p-3 border-solid border-[1px] rounded-md m-3"
            type="text"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-1 m-3 cursor-pointer border-solid border-[1px] rounded-sm hover:scale-95 transition-all bg-zinc-500 hover:bg-zinc-900 text-white"
            onClick={() => {
              const filteredList = resList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
          <button
            className="p-1 m-3 cursor-pointer border-solid border-[1px] rounded-sm hover:scale-95 transition-all bg-zinc-500 hover:bg-zinc-900 text-white"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {filteredResList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
}
