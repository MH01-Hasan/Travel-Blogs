import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,
    onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
  
  import { useEffect } from "react";
  import { useState } from "react";
import initialize from "../component/Firebase/firevaseInt";

 
  
  initialize()
  
  const useFirebase = () => {
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const [lodding,setLodding] = useState(true)
     const [user, setUser] =useState({}); 
     let [erroe, setErroe]=useState('')

//email and password creat register from ////
     const userregester = (name, email, password, history) => {
      setLodding(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErroe('');
          const newUser = { displayName: name, email };
              setUser(newUser);

          // Save user to the dashboard
          hanldeUser(email);

        // Update Profile / Send name to firebase after creation
        updateProfile(auth.currentUser, {
           displayName: name
                  }).then(() => {
                  }).catch((error) => {
                  });
                  history.replace('/');
              })
              .catch((error) => {
                setErroe(error.message);
              })
              .finally(() => setLodding(false));
          }









  //Login system  email and password////////
  const loginuser = (email ,password ,history,location)=>{
    setLodding(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const redairect = location.state?.from || '/home'
      history.push(redairect);

      const user = userCredential.user;
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(() => setLodding(false));
  }
  //Login system  email and password////////



   /// user info send to data base///
   const hanldeUser= (email ) => {
    
    fetch("https://radiant-chamber-60887.herokuapp.com/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
 


  /// user info send to data base///
    
      
  //1------------------- singin google  start------------------------------//
      const signInWithGoogle = (location, history) => {
        setLodding(true);
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                hanldeUser(user.email, user.displayName, 'PUT')
                setErroe('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
              setErroe(error.message);
            })
            .finally(() => setLodding(false));

    }
  //1------------------- singingoogle  end------------------------------//
  
  
  
  
  //2---------------observe user state-chage use start----------------------------------//
      useEffect( ()=>{
         const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (user) {
                  setUser(user)
              }
  
               else {
                setUser({})
              }
              setLodding(false)
            });
            return () => unsubscribe;
      },[])
  //2---------------observe user state-chage use end----------------------------------//
  
  
  
  
  
  
  //3---------------logout start----------------------------------//
      const logout = ()=>{
          signOut(auth)
          .then(() => {
         
            setUser({})
            })
            .finally(()=>setLodding(false));
      }
   //3---------------logout end----------------------------------//
  
   ////
   
   ///
  
  
  
   
  
      return{
          user,
          lodding,
          userregester,
          loginuser,
          signInWithGoogle,
          logout,
          erroe,
  
      }
  }
  
  
  export default useFirebase ;