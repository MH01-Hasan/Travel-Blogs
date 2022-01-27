import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './PandingBlogs.css'

const PandingBlogs = () => {

    
    const [pandingblogs ,setPandingblogs]=useState([])
    console.log(pandingblogs)
   

        useEffect(()=>{
        fetch('http://localhost:5000/Blogs')
        .then(res => res.json())
        .then(data =>{
            const PendingData =data.filter(data =>data.status ==="Pending")
            setPandingblogs(PendingData)
        })
        },[])


// //handel Approvel data////
const handleApproved = (id) => {
    axios
      .put(`http://localhost:5000/Blogs/${id}`, {
        status: "Approved",
      })
      .then((res) => {
        console.log(res);
        if (res.data.matchedCount > 0) {
          Swal.fire("Approved!", "Your request has been Approved.", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

// //handel Approvel data////

if (!pandingblogs?.length) {
  return (
    <button class="btn btn-primary spner-btn" type="button" disabled>
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
  );
}


            return (
                <div className='mx-3 mt-5 mb-5'>
                <h2 className='allblogs-com'>All Panding Blogs</h2>
                <div className="row">
            {
              pandingblogs.map(pandingblogs =>   <div className='col-lg-6 col-sm-12 mt-3'>
              <Card>
              {/* <Card.Header><i class="fas fa-user-circle icon"></i> {email}</Card.Header> */}
              <Card.Body className='data-fild'>
              <Card.Img variant="top" src={pandingblogs.image} className='img-fluid max-width: 100%;' />
                 <h6>{pandingblogs.title}</h6>
                 


              </Card.Body>                
                  <ListGroup variant="flush">
                  <ListGroup.Item>
                  <div className='show-reating'>
                      <h6 className='rting'>Rating :-</h6>
                  {[...Array(5)].map((star,i)=>{
              
                      const ratingvalue = i+1
                             return (
                                <div >
                               {<FaStar  
                                 size={15}
                                 color={ratingvalue <= pandingblogs.reting ? "#D09500" : "#333333" }
                                 
                                 />}
                            
                                </div>
                                
                            )
                         })}

                    <div className='actionn-btn'>
                        <button className='approber-btn'  onClick={() => handleApproved(pandingblogs._id)}>Approved</button>
                        <Link to ={`/details/${pandingblogs._id}`}>
                        <button  className='Details-btn'>Veiws</button>
                        </Link>
                    </div>
                         
                    
                  </div>
      
                  </ListGroup.Item>
                  
              </ListGroup>
      
              </Card>
          </div>)  
            }

        </div>
      
    </div>
            );
        };

export default PandingBlogs;