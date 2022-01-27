import { initializeApp } from "firebase/app"
import firebaseConfig from "./FirebaseConfig";


const initialize = ()=>{

    initializeApp(firebaseConfig);

}

export default initialize;