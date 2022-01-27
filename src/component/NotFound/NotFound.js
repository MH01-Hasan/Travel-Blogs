import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../image/found.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound container'>
        <img src={notfound} alt="" className='notfound-image' />
       <NavLink to="/" className='not-fund'>Back To Home Page</NavLink>
    </div>
    );
};

export default NotFound;