import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    return <div className="body">
        <div className="res_search">
            Search
        </div>
        <div className="res_container">
            {
                restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
}

export default Body;