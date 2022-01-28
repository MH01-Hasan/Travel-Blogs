import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './DetailsBlogs.css'

const DetailsBlogs = () => {
    const {id}=useParams();

    const [data ,setData]=useState({})
    console.log(data)

    const{user}= UseAuth()

    useEffect(()=>{
        fetch(`https://radiant-chamber-60887.herokuapp.com/Blogs/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div>

            <div className='row'>
                <div className='col-lg-8 col-sm-12'>
                <Card.Img variant="top" src={data.image} className='img-fluid max-width: 100%;' />
                <h4 className='hading-details'>{data.title}</h4>
                <p className='hading-pragraph'>{data.description}</p>

                </div>
                <div className='col-lg-4 col-sm-12'>
                <i class="fas fa-user-circle details-icon"></i> 
            <h5 className='user-info'>{user.displayName}</h5>
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
                                 color={ratingvalue <= data.reting ? "#D09500" : "#333333" }
                                 
                                 />}
                            
                                </div>
                                
                            )
                         })}
                   
                  </div>
                  <h5>Address : {data.address}</h5>
                  <p className='cost-css' ><i class="far fa-calendar-alt"></i> {data.date}</p>
                  <p  className='cost-css'>Cost : {data.cost} $</p>
      
                  </ListGroup.Item>
                  
              </ListGroup>


                </div>

            </div>
            
        </div>
    );
};

export default DetailsBlogs;