import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './UserApprovePost.css'

const UserApprovePost = () => {

    const {user}= UseAuth()

    const [approvePost, setApprovePost] = useState([]);
    

  useEffect(() => {
    fetch(`https://radiant-chamber-60887.herokuapp.com/mypost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        const approveData =data.filter(data =>data.status ==="Approved")
        setApprovePost(approveData)
        
        });
  }, [user.email]);

  if(!approvePost.length){
      return   <div>
      <h4 className='no-data'>No Data Found</h4>
      <button class="btn btn-primary spner-btn" type="button" disabled>
       <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Loading...
  </button>
    </div>
  
      
  }

    return (
       <div>
           
             <div className='mx-3 mt-5 mb-5'>
        <h2 className='allblogs-com'>All Blogs Approved  Post</h2>
      <div className="row">
  {
    approvePost.map(pandingblogs =>   <div className='col-lg-6 col-sm-12 mt-3'>
    <Card>
    <Card.Body className='data-fild'>
    <Card.Img variant="top" src={pandingblogs.image} className='img-fluid max-width: 100% home-image' />
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
       </div>
    );
};

export default UserApprovePost;