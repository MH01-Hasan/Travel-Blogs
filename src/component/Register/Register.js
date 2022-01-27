import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'
import regesterimage  from '../../image/triffold3.jpeg'
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const{userregester}=UseAuth()
    const history = useHistory()

    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data =>{ 
        userregester(data.name, data.email,data.password,history)
    reset()

    console.log(data)
    
    
    
    };
    return (
        <div className='container mt-5'>
            <div className='row'>
            <h1 className='Register'>Register Here </h1>
                <div className='col-lg-6 col-sm-12'>
                    <img src={regesterimage} alt="" className='img-fluid max-width: 100% regester-image' />

                </div>

                <div className='col-lg-6 col-sm-12'>
                    <div className='register-handel'>
                            <form onSubmit={handleSubmit(onSubmit)} className='from-fild'>
                        <p className='regester-fild-name'>Your name</p>
                        <input {...register("name")} placeholder='Enter Your Name' type="text"  className='input-fild' required /> <br />
                        <p className='regester-fild-name'>Email</p>
                        <input {...register("email")} placeholder='Enter Your Email' type="email" className='input-fild' required /> <br />
                        <p className='regester-fild-name'>Password</p>
                        <input {...register("password")} placeholder='Enter Your Password' type="password" className='input-fild' required /> <br /> 
                        <input type="submit" value="Register"  className='Register-btn'/>
                        </form>

                        <NavLink to="/login" className='togol'> Alredy Register? Please Login </NavLink>
                    </div>
               
                </div>

            </div>
      
        </div>
    );
};

export default Register;