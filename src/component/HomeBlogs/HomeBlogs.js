import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import UseAuth from '../../hooks/UseAuth';
import './HomeBlogs.css'

const HomeBlogs = () => {
    const [homeblogs ,setHomeblogs]=useState([])
    const [pageCount, setPageCount]=useState(0)
    const[page,setPage]=useState(0)
    const size = 10;
        // const {user}=UseAuth()

        useEffect(()=>{
        fetch(`https://radiant-chamber-60887.herokuapp.com/Blogs?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data =>{
            const setApprovedData =data.Blogs.filter(data =>data.status ==="Approved")
            setHomeblogs(setApprovedData);
            const count = data.count;
            const pagenumber = Math.ceil(count /size);
            setPageCount(pagenumber)
        
        });
           

        },[page])


    return (
        <div className='mx-3 mt-5 mb-5 blogs-section'>
        <h2 className='review-com'>All Blogs</h2>
        <div className="row">
            {
              homeblogs.map(blogs => <div className='col-lg-4  col-sm-12 mt-3'>
              <Card>
              <Card.Header><i class="fas fa-user-circle icon"></i> {blogs.travelerInfo}</Card.Header>
              <Card.Body className='data-fild'>
              <Card.Img variant="top" src={blogs.image} className='img-fluid max-width: 100%; home-image' />
              <div className='blogs-footer'>
              <h5>{blogs.title}</h5>
              <p><i class="far fa-calendar-alt"></i> {blogs.date}</p>
              </div>
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
                                 color={ratingvalue <= blogs.reting ? "#D09500" : "#333333" }
                                 
                                 />}
                            
                                </div>        
                            )
                         })}
                    <div className='actionn-btn'>
                    
                    <Link to ={`/details/${blogs._id}`}>
                     <button  className='Details-btn'>Veiws</button>
                    </Link>
                    </div>
                  </div>
      
                  </ListGroup.Item>
                  
              </ListGroup>
      
              </Card>
          </div>)  
            }

            <div className='pageCount'>
               { [...Array(pageCount).keys()]
               .map(number => <button 
                className = {number === page ? "selected" : " "}
                 keu={number}
                onClick={()=> setPage(number)}
                >{number+1}</button>)
               
               }

            </div>

        </div>
      
    </div>
    );
};

export default HomeBlogs;