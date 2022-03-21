import React,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap'
const Restdetails = () => {
    const [indvhoteldetails, setindvHoteldeatils] = useState([]);
    const params = useParams()
    const {id} = params
useEffect(() => {
    const fetchsingledata = async () => {
      await fetch("/restaurants.json")
        .then((data) => data.json())
        .then((data) => setindvHoteldeatils(data.restaurants));
    };
    fetchsingledata();
  }, []);

  // eslint-disable-next-line eqeqeq
  const details = indvhoteldetails.find((i) => i.id == id)
  console.log("newdata",details);

  console.log("datas", indvhoteldetails);
  return (
    <div>Restdetails
      {details
      ?( <ListGroup>
        <ListGroup.Item>{details.name}</ListGroup.Item>
        <ListGroup.Item>{details.neighborhood}</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>)
       :null}
  

    </div>
  )
}

export default Restdetails