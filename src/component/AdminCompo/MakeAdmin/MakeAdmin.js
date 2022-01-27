import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './MakeAdmin.css'

const MakeAdmin = () => {
//************ Swite Alearte set******************* */

const sweetalart = () =>{
    Swal.fire({
        position: 'top-ecnter',
        icon: 'success',
        title: 'Successfully make Admin !',
        showConfirmButton: false,
        timer: 2200
      })

}
///************ Swite Alearte set******************* */

const { register, handleSubmit, reset  } = useForm();

const onSubmit = (data) => {
    fetch("http://localhost:5000/makeadmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        
      });
       sweetalart()
    reset()          

  };


    return (
        <div>
        <h1 className='make-admin'>Make Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className='text-admin'>Please Email Address</p>
          <input
            className="input-field"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />
  
          <input
            className="admin-submit-btn btn btn-danger mt-3"
            type="submit"
            value="make as Admin"
          />
  
        </form>
        
      </div>
    );
};

export default MakeAdmin;