
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header/Header';

import Login from './component/Login/Login';
import Register from './component/Register/Register';
import NotFound from './component/NotFound/NotFound';

import AuthProvider from './contex/AuthProvider';
import Dashbord from './component/Dashbord/Dashbord';
import Home from './component/Home/Home';
import DetailsBlogs from './component/DetailsBlogs/DetailsBlogs';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
     <Header></Header>
   <Switch>
   <Route exact path="/">
   <Home></Home>
    </Route>
   <Route exact path="/home">
     <Home></Home>
    </Route>
    <Route path='/details/:id'>
       <DetailsBlogs></DetailsBlogs>
     </Route>
    
  
    <Route  path="/login">
      <Login/>
    </Route>
    <Route  path="/register">
      <Register/>
    </Route>
    <Route  path="/dashboard">
      <Dashbord/>
    </Route>

   
    <Route  path="*">
      <NotFound/>
    </Route>
 </Switch>
</Router>
</AuthProvider>
    </div>
  );
}

export default App;
