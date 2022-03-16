import React from 'react'
import {Card,Row} from 'react-bootstrap'
const Resturantcard = ({name,add,image}) => {
  return (
  <div className='col-md-6'>
    <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       {add}
      </Card.Text>
    
    </Card.Body>
  </Card>
</div>




  )
}

export default Resturantcard