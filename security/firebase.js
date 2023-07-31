import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8s12MlzOI_F2fJuXAArZ9gN9ZfiKXmXc",
  authDomain: "react-http-642ee.firebaseapp.com",
  databaseURL: "https://react-http-642ee-default-rtdb.firebaseio.com",
  projectId: "react-http-642ee",
  storageBucket: "react-http-642ee.appspot.com",
  messagingSenderId: "1003415192218",
  appId: "1:1003415192218:web:52460e629137f67b7e5523",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export the authentication and firestore instances
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export const database = firebase.database();

export default firebase;
