import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAedQzDiAW13Jz-RYCpHFyejKs0PXN61I",
  authDomain: "gl-c6ea7.firebaseapp.com",
  projectId: "gl-c6ea7",
  storageBucket: "gl-c6ea7.appspot.com",
  messagingSenderId: "1032362931418",
  appId: "1:1032362931418:web:85f71b1649160396db21e3",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
