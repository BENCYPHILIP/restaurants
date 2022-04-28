import React,{useState,useEffect}from 'react'
import { useParams,Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
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
    <div>
        <br/>
        <Marquee style={{color:'#8a2b06', fontSize:'20px'}} width="60%" direction="left" scrolldelay="500" text  ="red" height="100px">“Part of the secret of success is to eat what you like and let the food fight it out inside.” </Marquee>
       
    {details ?
    
                (
<div className="card mb-3" style={{maxWidth: '900px',marginLeft:'170px',marginTop:'16px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={details.photograph} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title" style={{color:'#8a2b06',fontWeight:'bold'}}>{details.name}</h2>
        <p>{details.neighborhood}</p>
        <p><strong>Cuisine:</strong> {details.cuisine_type}</p>
        <p> <strong>Address:</strong> {details.address}</p>
        <h5><strong>Operating Hours</strong></h5>
                              
                            <p><strong>Monday: </strong>{details.operating_hours.Monday}</p>
                              <p><strong>Tuesday: </strong>{details.operating_hours.Tuesday}</p>
                              <p><strong>Wednesday:</strong> {details.operating_hours.Wednesday}</p>
                              <p><strong>Thursday: </strong>{details.operating_hours.Thursday}</p>
                              <p><strong>Friday: </strong>{details.operating_hours.Friday}</p>
                              <p><strong>Saturday: </strong>{details.operating_hours.Saturday}</p>
                              <p><strong>Sunday:</strong> {details.operating_hours.Sunday}</p>
      </div>
    </div>
  </div>
</div>
                // <div className="row" style={{marginTop:'10px'}}>
                
                //   <div className="col-sm-4">
                //      <div className="card border-danger mb-3" style={{maxWidth: '18rem'}}>
                //         <div className="card-header"></div>
                //              <div className="card-body ">
                //                  <h5 className="card-title">{details.name}</h5>
                                    
                //                           <p>{details.neighborhood}</p>
                //                           <p><strong>Cuisine:</strong> {details.cuisine_type}</p>
                //                 <p> <strong>Address:</strong> {details.address}</p>
                //              </div>
                //         </div>
                //   </div>
                //   <div className="col-sm-4">
                //      <div className="card border-danger" style={{maxWidth: '18rem'}}>
                //         <div className="card-header"></div>
                //              <div className="card-body ">
                //                  <h5 className="card-title">Operating Hours</h5>
                              
                //                 <p>Monday: {details.operating_hours.Monday}</p>
                //                 <p>Tuesday: {details.operating_hours.Tuesday}</p>
                //                 <p>Wednesday: {details.operating_hours.Wednesday}</p>
                //                 <p>Thursday: {details.operating_hours.Thursday}</p>
                //                 <p>Friday: {details.operating_hours.Friday}</p>
                //                 <p>Saturday: {details.operating_hours.Saturday}</p>
                //                 <p>Sunday: {details.operating_hours.Sunday}</p>
                //              </div>
                //         </div>
                //   </div>
                //   <div className="col-sm-4">
                //   <Image className="img" src={details.photograph} alt={details.name} width={'430em'} height={'430em'} />
                //   </div>
                // </div>

                ) : null
            }
             {/* <Link className="btn btn-outline-danger" to="/">Go Back</Link> */}
    </div>
  )
}
export default Restdetails