import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';

const UserPandingPost = () => {

    const {user}= UseAuth()

    const [pandingpost, setPandingpost] = useState([]);
   

  useEffect(() => {
    fetch(`https://radiant-chamber-60887.herokuapp.com/mypost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        const PendingData =data.Blogs.filter(data =>data.status ==="Pending")
        setPandingpost(PendingData)
        
        });
  }, [user.email]);

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
    const remainguser = pandingpost.filter(manages =>manages._id!==id)
    setPandingpost( remainguser)
  }
})}}

///**************/delet meathod****************************/////
if(!pandingpost.length){
  return <div>
      <h4 className='error-mas'> No Data Panding </h4>
  </div>

  
}



    return (
      <div className='mx-3 mt-5 mb-5'>
      <h2 className='allblogs-com'>All Blogs Panding  Post</h2>
      <div className="row">
  {
    pandingpost.map(pandingblogs =>   <div className='col-lg-6 col-sm-12 mt-3'>
    <Card>
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
              <button className='approber-btn'  onClick={() => handleDelet(pandingblogs._id)}>Delete</button>
              <Link
               to ={`/details/${pandingblogs._id}`}>
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

export default UserPandingPost;