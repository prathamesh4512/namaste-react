import { CDN_URL } from "../utils/constants"; 


const RestaurantCard = (props) => {
    const {resData} = props;
    const { data } = resData;

    return (<div className="res-card">
        <img className="res-logo" src={CDN_URL+data?.cloudinaryImageId}/>
        <h3>{data?.name}</h3>
        <h4>{data?.cuisines.join(", ")}</h4>
        <h4>{data?.avgRating} stars</h4>
        <h4>{data?.deliveryTime} mins</h4>
        <h4>₹{data?.costForTwo/100} FOR TWO</h4>
    </div>);
}

export default RestaurantCard;