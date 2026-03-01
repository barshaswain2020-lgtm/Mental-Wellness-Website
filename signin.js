
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG-Bg-gbZKxOE5uy_cIRGUIf5TbJoODzo",
  authDomain: "mental-wellness-5f596.firebaseapp.com",
  projectId: "mental-wellness-5f596",
  storageBucket: "mental-wellness-5f596.firebasestorage.app",
  messagingSenderId: "131375856164",
  appId: "1:131375856164:web:f739247befd4519541b6b1",
  measurementId: "G-WCF9L5R0HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signin button
document.getElementById("signin").addEventListener("click", (e) => {
  e.preventDefault();

     signin.addEventListener("click",(e)=>{
    window.location.href = "navbar.html";
  })

  //input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account logedin successfully ✅");
      //  👉 Redirect to navbar page AFTER popup
      window.location.href = "navbar.html";
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
});

