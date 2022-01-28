import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import AllBlogs from '../AdminCompo/AllBlogs/AllBlogs';
import ApprovelBlogs from '../AdminCompo/ApprovelBlogs/ApprovelBlogs';
import MakeAdmin from '../AdminCompo/MakeAdmin/MakeAdmin';
import PandingBlogs from '../AdminCompo/PandingBlogs/PandingBlogs';
import Share from '../Share/Share';
import UserApprovePost from '../UserApprovePost/UserApprovePost';
import UserPandingPost from '../UserPandingPost/UserPandingPost';
import './Dashbord.css'

const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const {logout,user} =UseAuth()
    
   const [isAdmi, setIsAdmin] = useState(false);

   useEffect(() => {
    fetch(`https://radiant-chamber-60887.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);


   const style={
    textDecoration:"none",
   }
    return (
        <div>
             <div className='dashbord-fild ' > 
            <div className='row '> 
                <div className='col-lg-2 col-sm-12 dashbord-list'>      

             { isAdmi ? <div>
                  <Link style={style} to={`${url}`}>
                    <li className="dashboard-menu mt-5 ">ALL Blogs</li>
                  </Link>
                  <Link style={style} to={`${url}/pandingblogs`}>
                      <li className="dashboard-menu "> Panding Blogs</li>
                  </Link>
                  <Link style={style} to={`${url}/approvelBlogs`}>
                    <li className="dashboard-menu "> Approvel Blogs</li>
                  </Link>

                  <Link style={style} to={`${url}/makeadmin`}>
                    <li className="dashboard-menu ">Make Admin</li>
                  </Link>
                </div>

                 :
              <div>
                  <Link style={style} to={`${url}`}>
                      <li className="dashboard-menu  ">Blogs-Post</li>
                    </Link>

                    <Link style={style} to={`${url}/panding`}>
                        <li className="dashboard-menu ">Panding-Post</li>
                    </Link>
                      <Link style={style} to={`${url}/approvel`}>
                        <li className="dashboard-menu "> Approvel-Post</li>
                     </Link>
                                
              </div>
              
              }
              


              
                    
             <li className="dashboard-menu "> <button className='log-out-btn' onClick ={logout}> <i class="fas fa-sign-out-alt"></i>log-Out</button></li> 
               </div>

             <div className='col-lg-10 col-sm-12'>
              <Switch>


              { isAdmi ? <Route exact path={`${path}`}>
                <AllBlogs></AllBlogs>
              </Route>
              :
              <Route exact  path={`${path}`}>
              <Share></Share>
              </Route>
              }




              <Route  exact path={`${path}/pandingblogs`}>
              <PandingBlogs></PandingBlogs>
              </Route>

              <Route exact path={`${path}/approvelBlogs`}>
              <ApprovelBlogs></ApprovelBlogs>
              </Route>

              <Route exact path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
              </Route>

              
              

              <Route exact  path={`${path}/panding`}>
              <UserPandingPost></UserPandingPost>
              </Route>

              <Route exact  path={`${path}/approvel`}>
              <UserApprovePost></UserApprovePost>
              </Route> 
                        
            </Switch>

                </div>

            </div>
        
        </div>
            
        </div>
    );
};

export default Dashbord;
