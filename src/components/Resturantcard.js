import React from 'react'
import {Card,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Resturantcard = ({name,add,image,id}) => {
  return (
  <div >
    <Link to={`/resturant/${id}`}>
    <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       {add}
      </Card.Text>
    
    </Card.Body>
  </Card>
    </Link>
   
</div>




  )
}

export default Resturantcard