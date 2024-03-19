 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getDatabase, ref, update} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDHEdJSK-YDxv8HVXAKJJDxjd8bomTbP9E",
   authDomain: "myfirstproject-20341.firebaseapp.com",
   databaseURL: "https://myfirstproject-20341-default-rtdb.firebaseio.com",
   projectId: "myfirstproject-20341",
   storageBucket: "myfirstproject-20341.appspot.com",
   messagingSenderId: "453186343307",
   appId: "1:453186343307:web:f6c4d626992f6311951f8e"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const auth = getAuth();
 login.addEventListener('click',(e)=>{
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     const dt=new Date();
     update(ref(database,'users/' + user.uid),{
             last_login:dt,
         })
         document.getElementById('errorMessage').style.display = 'none';
         document.getElementById('successMessage').style.display = 'block';
         
     })
     .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     document.getElementById('errorMessage').style.display = 'block';
     document.getElementById('successMessage').style.display = 'none';
     });



 });




  