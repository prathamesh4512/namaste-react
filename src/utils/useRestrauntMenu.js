import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      console.log(json)
      setResInfo(json.data);
    }catch(e){
      console.log("error",e)
    }
    setIsLoading(false)
  };
  return {resInfo, isLoading};
};

export default useRestaurantMenu;
