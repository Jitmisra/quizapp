import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    // your key
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  export {firebase};