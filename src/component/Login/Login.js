import React from 'react';
import { useForm } from 'react-hook-form';
import'./Login.css'
import loginimage from '../../image/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg'
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit,reset } = useForm();
    const history = useHistory()
    const location = useLocation();

    const redairect = location.state?.from || '/home'
    
    const{loginuser,signInWithGoogle}=UseAuth()
    const onSubmit = data =>{ 
        loginuser(data.email,data.password,history,location)
          reset()
        };
        const handelgoogle= ()=>{
            signInWithGoogle(location,history)
        }
    return (
        <div className='container mt-5'>
        <div className='row login-fild'>
        <h1 className='Register'>Login Here </h1>
            <div className='col-lg-6 col-sm-12'>
            <img src={loginimage} alt="" className='img-fluid max-width: 100% regester-image' />
             

            </div>
            <div className='col-lg-6 col-sm-12'>
                <div className='register-handel'>
                 <form onSubmit={handleSubmit(onSubmit)} className='from-fild'>
        
                    <p className='regester-fild-name'>Email</p>
                    <input {...register("email")} placeholder='Enter Your Email' type="email" className='input-fild' required /> <br />

                    <p className='regester-fild-name'>Password</p>
                    <input {...register("password")} placeholder='Enter Your Password' type="password" className='input-fild' required /> <br /> 
                    <input type="submit" value="Login"  className='Register-btn'/>
                    </form>
                    <NavLink to="/register" className='togol'> New User? Please Register</NavLink>
                </div>

                <button className='google-btn' onClick={()=>handelgoogle()}>Google Login</button>
               

           
            </div>

            

        </div>
  
    </div>
    );
};

export default Login;