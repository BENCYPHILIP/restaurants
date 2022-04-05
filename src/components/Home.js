import React, { useState, useEffect } from "react";
import Resturantcard from './Resturantcard'
import { Row,Col } from 'react-bootstrap';

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
    <Row style={{display: 'flex', flexDirection: 'row'}} className="g-4">
      {
      hoteldetails.map(items => (
            <Col sm={12} md={8} lg={6} xl={3} >
              <Resturantcard name={items.name} image={items.photograph} id={items.id} cuisine_type={items.cuisine_type} neighborhood={items.neighborhood}/>
            </Col>      
        ))        
      }
    </Row>
    </div>
  );
};
