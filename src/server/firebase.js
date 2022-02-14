
import app from 'firebase/compat/app';

import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD4uRgHJFunIeoyXLpSgwcu6SSReFCmjGw",
    authDomain: "home-6a21e.firebaseapp.com",
    projectId: "home-6a21e",
    storageBucket: "home-6a21e.appspot.com",
    messagingSenderId: "24791672260",
    appId: "1:24791672260:web:ba2f196b15b3c21f547091",
    measurementId: "G-836T2YWMFC"
  };

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.db = app.firestore();
    }
}

export default Firebase;