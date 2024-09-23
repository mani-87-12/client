// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzl7vzqCzwEULVnpuOE3N-k7DYOvVDGRs",
  authDomain: "socialmedia-5d2e5.firebaseapp.com",
  projectId: "socialmedia-5d2e5",
  storageBucket: "socialmedia-5d2e5.appspot.com",
  messagingSenderId: "420100686230",
  appId: "1:420100686230:web:0e35a414b9b756a7099db7",
  measurementId: "G-KK8HNGMX60"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider, signInWithPopup };

