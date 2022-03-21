import React, { useState, useEffect } from "react";
import Resturantcard from './Resturantcard'
export const Home = () => {
  const [hoteldetails, setHoteldeatils] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      await fetch("./restaurants.json")
        .then((data) => data.json())
        .then((data) => setHoteldeatils(data.restaurants));
    };
    fetchdata();
  }, []);

  console.log("datas", hoteldetails);
  return (
    <div>
    {
      hoteldetails.map((items)=>(
        
          <Resturantcard name={items.name} add={items.address} image={items.photograph} id={items.id}/>
      
        )
      )}
    </div>
  );
};
