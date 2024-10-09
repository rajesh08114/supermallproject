
  // Import the functions you need from the SDKs you need

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC_1sj1nPruNoqY26XmkuefnQYvVml8whA",
    authDomain: "supermall2.firebaseapp.com",
    databaseURL: "https://supermall2-default-rtdb.firebaseio.com",
    projectId: "supermall2",
    storageBucket: "supermall2.appspot.com",
    messagingSenderId: "1033694743034",
    appId: "1:1033694743034:web:119a0c246b07f549347c43"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  // Initialize Firebase
  
  const auth = getAuth(app);
  
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function (event) {
    event.preventDefault()
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creating Account...")
    window.location.href="http://127.0.0.1:5500/admin/admin.html"
     

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });

    
  })
  


  