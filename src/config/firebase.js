import firebase from 'firebase/app';

import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBvqcGSzkelMV7PMDdh9plSsAqJZrvvUAU",
    authDomain: "tasksua.firebaseapp.com",
    projectId: "tasksua",
    storageBucket: "tasksua.appspot.com",
    messagingSenderId: "978611699250",
    appId: "1:978611699250:web:b754d678c0298db21a462b",
    measurementId: "G-KZHWYQC0RD"
};


firebase.initializeApp(firebaseConfig);
export default firebase