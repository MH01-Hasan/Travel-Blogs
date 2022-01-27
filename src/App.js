
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
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Footer from './component/Footer/Footer';

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
    <PrivateRoute  path='/details/:id'>
       <DetailsBlogs></DetailsBlogs>
     </PrivateRoute>
    
  
    <Route  path="/login">
      <Login/>
    </Route>
    <Route  path="/register">
      <Register/>
    </Route>
    <PrivateRoute  path="/dashboard">
      <Dashbord/>
    </PrivateRoute>

   
    <Route  path="*">
      <NotFound/>
    </Route>
 </Switch>
 <Footer></Footer>
</Router>
</AuthProvider>
    </div>
  );
}

export default App;
