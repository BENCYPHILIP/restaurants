import React,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
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
    
    {details ?
                (
                    <Row className="my-3 ">
                        <Col md={3}>
                            <Image className="img" src={details.photograph} alt={details.name} fluid />
                        </Col>
                        <Col md={4}>
                            <ListGroup.Item>
                                <h2>{details.name}</h2>
                                <p>{details.neighborhood}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p><strong>Cuisine:</strong> {details.cuisine_type}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p> <strong>Address:</strong> {details.address}</p>
                            </ListGroup.Item>

                        </Col>
                        <Col md={4}>
                            <ListGroup.Item>
                                <h4>Operating Hours:</h4>
                                <p>Monday: {details.operating_hours.Monday}</p>
                                <p>Tuesday: {details.operating_hours.Tuesday}</p>
                                <p>Wednesday: {details.operating_hours.Wednesday}</p>
                                <p>Thursday: {details.operating_hours.Thursday}</p>
                                <p>Friday: {details.operating_hours.Friday}</p>
                                <p>Saturday: {details.operating_hours.Saturday}</p>
                                <p>Sunday: {details.operating_hours.Sunday}</p>
                            </ListGroup.Item>
                        </Col>
                    </Row>
                ) : null
            }
  

    </div>
  )
}

export default Restdetails