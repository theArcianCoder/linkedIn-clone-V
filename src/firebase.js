import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCkVfsjiFi3_FqO1zT5UJK8S9U5tJIW6KQ",
    authDomain: "linkedin-clone-yt-71919.firebaseapp.com",
    projectId: "linkedin-clone-yt-71919",
    storageBucket: "linkedin-clone-yt-71919.appspot.com",
    messagingSenderId: "278101284457",
    appId: "1:278101284457:web:821fc136c6bed894b474f8",
    measurementId: "G-EMMXMG0BL5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db, auth};