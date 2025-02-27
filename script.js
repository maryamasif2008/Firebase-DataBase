import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {getDatabase , ref ,set} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJeMxjRjCQ9c3sQyECE0iUtkqt5NtxkcI",
    authDomain: "database2-63bd4.firebaseapp.com",
    databaseURL: "https://database2-63bd4-default-rtdb.firebaseio.com",
    projectId: "database2-63bd4",
    storageBucket: "database2-63bd4.firebasestorage.app",
    messagingSenderId: "640683512712",
    appId: "1:640683512712:web:723b3badfc9ce0fe82a03d",
    measurementId: "G-FFNCML7V8E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
document.getElementById("submit").addEventListener("click",function (event){
    event.preventDefault()
    set(ref(db,'student data/' + document.getElementById("username").value),
    {
        username: document.getElementById("username").value,
        selectedfield : document.getElementById("selected field").value,
        email: document.getElementById("email").value
    })
  alert('Data Saved Successfuly');  
})

