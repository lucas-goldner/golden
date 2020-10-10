import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import {seedDatabase} from "../seed";

const config = {

};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
