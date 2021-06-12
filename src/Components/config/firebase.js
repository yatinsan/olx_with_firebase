import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCLp3sNu53dNDdDaK_k2xG1jjaYHAkB6s4",
    authDomain: "fir-55c4e.firebaseapp.com",
    projectId: "fir-55c4e",
    storageBucket: "fir-55c4e.appspot.com",
    messagingSenderId: "175285515429",
    appId: "1:175285515429:web:d3adf2c3f63912a7b6094c",
    measurementId: "G-BQHXYN390K"
  };

 export const Firebase = firebase.initializeApp(firebaseConfig)