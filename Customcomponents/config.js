import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA64ZNqeqYsJaLiWECPeYqOKQu5hlELSz4",
  authDomain: "gastro-track1.firebaseapp.com",
  databaseURL: "https://gastro-track1.firebaseio.com",
  projectId: "gastro-track1",
  storageBucket: "gastro-track1.appspot.com",
  messagingSenderId: "198753880223",
  appId: "1:198753880223:web:a26c0b624831c50c127aaa"
  };
  try{

      firebase.initializeApp(firebaseConfig);
  }
catch(err){
console.log(err)
}