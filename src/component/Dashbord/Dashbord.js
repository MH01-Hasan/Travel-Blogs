import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import AllBlogs from '../AdminCompo/AllBlogs/AllBlogs';
import ApprovelBlogs from '../AdminCompo/ApprovelBlogs/ApprovelBlogs';
import PandingBlogs from '../AdminCompo/PandingBlogs/PandingBlogs';
import Share from '../Share/Share';
import UserPandingPost from '../UserPandingPost/UserPandingPost';
import './Dashbord.css'

const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const {logout,user} =UseAuth()
    
   const [isAdmi, setIsAdmin] = useState(false);

   const style={
    textDecoration:"none",
   }
    return (
        <div>
             <div className='dashbord-fild ' > 
            <div className='row '> 
                <div className='col-lg-2 col-sm-12 dashbord-list'>      

               <div>
                 {/* Admin DashBoard Working Field */}
                  <Link style={style} to={`${url}`}>
                    <li className="dashboard-menu mt-5 ">ALL Blogs</li>
                  </Link>
                  <Link style={style} to={`${url}/pandingblogs`}>
                      <li className="dashboard-menu "> Panding Blogs</li>
                  </Link>
                  <Link style={style} to={`${url}/approvelBlogs`}>
                    <li className="dashboard-menu "> Approvel Blogs</li>
                  </Link>
                  



                </div>
            {/* User DashBoard Working Field */}
              <div>
                  <Link style={style} to={`${url}/share`}>
                      <li className="dashboard-menu  ">Blogs-Post</li>
                    </Link>

                    <Link style={style} to={`${url}/panding`}>
                        <li className="dashboard-menu ">Panding-Post</li>
                    </Link>
                      <Link style={style} to={`${url}/approvel`}>
                        <li className="dashboard-menu "> Approvel-Post</li>
                      </Link>
                                
              </div>
              
                    
             <li className="dashboard-menu "> <button className='log-out-btn' onClick ={logout}> <i class="fas fa-sign-out-alt"></i>log-Out</button></li> 
               </div>

                <div className='col-lg-10 col-sm-12'>
                <Switch>
              <Route exact path={`${path}`}>
                <AllBlogs></AllBlogs>
              </Route>



              <Route exact  path={`${path}/share`}>
              <Share></Share>
              </Route>

              <Route exact  path={`${path}/panding`}>
              <UserPandingPost></UserPandingPost>
              </Route>



              <Route  exact path={`${path}/pandingblogs`}>
              <PandingBlogs></PandingBlogs>
              </Route>
            
              <Route exact path={`${path}/approvelBlogs`}>
              <ApprovelBlogs></ApprovelBlogs>
              </Route>
             
              
            </Switch>

                </div>

            </div>
        
        </div>
            
        </div>
    );
};

export default Dashbord;
