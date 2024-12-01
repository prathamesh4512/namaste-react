import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {SWIGGY_API_URL} from "../utils/constants"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //All Restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Filtered Restaurants
  const [searchRestaurant, setSearchRestaurant] = useState(""); //Search Restaurants

  //useEffect(2 params) - callback function, dependencies
  useEffect(() => {
    //get restaurants list
    const getRestaurants = async () => {
      //making swiggy api call
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    getRestaurants();
  }, []);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          value={searchRestaurant}
          onChange={(e) => {
            setSearchRestaurant(e.target.value);
            const filteredRes = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase());
            });
            setFilteredRestaurants(filteredRes);
          }}
        />
        <button
          className="res-filter"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurants) => restaurants.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList); //updating the state
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {(searchRestaurant.length > 0
          ? filteredRestaurants
          : listOfRestaurants
        )?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;