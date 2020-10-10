import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import {seedDatabase} from "../seed";

const config = {
  apiKey: "AIzaSyDFkZRDbVVanNjLirdlDuU3eKJn4Q1Qlmw",
  authDomain: "golden-f9bf2.firebaseapp.com",
  databaseURL: "https://golden-f9bf2.firebaseio.com",
  projectId: "golden-f9bf2",
  storageBucket: "golden-f9bf2.appspot.com",
  messagingSenderId: "125566892612",
  appId: "1:125566892612:web:6bff2bf9dbbbd204935a11",
  measurementId: "G-8S3BTMQD0J",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
