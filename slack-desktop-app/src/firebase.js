import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA5O-zhEQ-WGIRcvGYrXxOu9kQGCi9OyE",
  authDomain: "desktop-app-17047.firebaseapp.com",
  projectId: "desktop-app-17047",
  storageBucket: "desktop-app-17047.appspot.com",
  messagingSenderId: "827083341201",
  appId: "1:827083341201:web:52d30bf61164b32c256e30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
