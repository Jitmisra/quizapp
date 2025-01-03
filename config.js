import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    //apikey
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  export {firebase};