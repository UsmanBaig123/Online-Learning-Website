import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHEdJSK-YDxv8HVXAKJJDxjd8bomTbP9E",
  authDomain: "myfirstproject-20341.firebaseapp.com",
  databaseURL: "https://myfirstproject-20341-default-rtdb.firebaseio.com",
  projectId: "myfirstproject-20341",
  storageBucket: "myfirstproject-20341.appspot.com",
  messagingSenderId: "453186343307",
  appId: "1:453186343307:web:f6c4d626992f6311951f8e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
Signup.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var age = document.getElementById('age').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        set(ref(database,'users/' + user.uid),{
            email:email,
            first_name:first_name,
            last_name:last_name,
            age:age
        })
        alert('user created');
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
    });
});


























