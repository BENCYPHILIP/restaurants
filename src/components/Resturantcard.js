import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Resturantcard = ({name,image,id,cuisine_type,neighborhood}) => {
  return (
  <div >
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={image} className="p-3" />
  <Card.Body>
    <Card.Title style={{ color: '#8a2b06',fontWeight:'bold'}}>{name}</Card.Title>
    <Card.Text>
    <p><strong>Cuisine:</strong> {cuisine_type}</p>
    </Card.Text>
    <Card.Text as="div">
    <p>{neighborhood}</p>
    </Card.Text>
    <Link to={`/resturant/${id}`}>
    <Button variant="danger">See More</Button> 
    </Link>
  </Card.Body>
</Card>
</div>
  )
}

export default Resturantcard