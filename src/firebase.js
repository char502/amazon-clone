import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDO_VmfQ4yVbxBcJwUhDtPyQtKKYugiqJM",
  authDomain: "clone-14d82.firebaseapp.com",
  databaseURL: "https://clone-14d82.firebaseio.com",
  projectId: "clone-14d82",
  storageBucket: "clone-14d82.appspot.com",
  messagingSenderId: "806675085986",
  appId: "1:806675085986:web:995305c935347ec99175fb",
  measurementId: "G-CG194RPY2P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
