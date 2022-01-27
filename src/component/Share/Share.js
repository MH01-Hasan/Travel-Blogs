import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Share.css'
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';

const Share = () => {
    const [reting, setReting]= useState(null)
    const[hover,setHover]=useState(null)
    const { register, handleSubmit,reset } = useForm();  

    const{user}=UseAuth()
    const onSubmit = data => {
        data.email = user.email;
        data.status = `Pending`;
        axios.post('http://localhost:5000/Blogs',data)
    .then(res => {
        if(res.data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            reset()
            setReting(null)
         
        } 
    })  
    
  

};
   

    return (
        <div className=' container shate-post mt-5 mb-5'>
             <div className='post-input'>
             <form onSubmit={handleSubmit(onSubmit)}>
                 <h5 className='share-exp'>Share Your Travelers' Experiences !!!</h5>
             <p className='fild-name-post'>Traveler Name</p>
                <input {...register("travelerInfo")} placeholder='traveler info' required  className='post-input-fild'/> <br />
                 <p className='fild-name-post'>Place Image Url</p>
                <input {...register("image")} placeholder='image Url' required  className='post-input-fild'/> <br />
                <p className='fild-name-post'>Title</p>
                <input {...register("title")} placeholder='title' required  className='post-input-fild'/> <br />
                
                <p className='fild-name-post'>Cost</p>
                <input {...register("cost")} placeholder='Travel cost' required  className='post-input-fild'/> <br />
                <p className='fild-name-post'>Address</p>
                <input {...register("address")} placeholder='address' required  className='post-input-fild'/> <br />
                <p className='fild-name-post'>Date</p>
                <input {...register("date")} placeholder='date' required type='date' className='post-input-fild' /> <br />
                <p className='fild-name-post'>Description</p>
                <textarea  {...register("description")} placeholder='description' required  className='textarea-input-fild'/> <br />
                <p className='fild-name-post'>Reting</p>
                {
                [...Array(5)].map((star, i) =>{
                    const Ratingvalue = i + 1
                    return  <label>
                        <input 
                        type="radio" 
                        {...register("reting")}
                        name="reting"
                        value={Ratingvalue}
                        onClick= {()=>setReting(Ratingvalue)}

                          />
                         < FaStar className='star'
                         size={25}
                         color={Ratingvalue <= ( hover || reting) ? "#D09500" : "#333333"  }
                         onMouseEnter={()=> setHover(Ratingvalue)}
                         onMouseLeave={()=> setHover(null)}
                         />
                          </label>
                          
                })
               
                   
                }
                 <p className='reting'>This Rating is ({reting})</p>
                  <br />
               <input type="submit"  className='submit-btn'/>
                </form>
                
             </div>
        </div>
    );
};

export default Share;