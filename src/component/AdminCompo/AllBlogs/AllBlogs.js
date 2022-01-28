import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../../hooks/UseAuth';
import './AllBlogs.css'


const AllBlogs = () => {

const [blogs ,setBlogs]=useState([])

console.log(blogs)

const {user}=UseAuth()
useEffect(()=>{
fetch('https://radiant-chamber-60887.herokuapp.com/Blogs')
.then(res => res.json())
.then(data =>setBlogs(data.Blogs))
},[])




///**************/delet meathod****************************/////
const handleDelet = (id)=>{
  const prosid =window.confirm('are you sure delete')
if(prosid){
  const url = `https://radiant-chamber-60887.herokuapp.com/Blogs/${id}`
fetch(url,{
  method:'DELETE'
})
.then(res =>res.json())
.then(data =>{
  if(data.deletedCount>0){
    Swal.fire("Approved!", "Your request has been Approved.", "success");
    const remainguser = blogs.filter(manages =>manages._id!==id)
    setBlogs( remainguser)
  }
})}}

///**************/delet meathod****************************/////

if (!blogs?.length) {
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
        <h2 className='allblogs-com'>All Blogs</h2>
        <div className="row">
            {
              blogs.map(blogs => <div className='col-lg-6  col-sm-12 mt-3'>
              <Card>
              <Card.Header><i class="fas fa-user-circle icon"></i><small className='name-dispaly'> {blogs.travelerInfo}</small></Card.Header>
              <Card.Body className='data-fild'>
              <Card.Img variant="top" src={blogs.image} className='img-fluid max-width: 100%; home-image' />
                 <h6>{blogs.title}</h6>
                 


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
                        <button className='act-btn' onClick={() => handleDelet(blogs._id)}>Dleate</button>
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

        </div>
      
    </div>
    );
};

export default AllBlogs;