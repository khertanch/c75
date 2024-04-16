import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA8rDfK_HMFJovrkY8cvihrsHLuMz73GPg",
  authDomain: "e-ride-63b16.firebaseapp.com",
  projectId: "e-ride-63b16",
  storageBucket: "e-ride-63b16.appspot.com",
  messagingSenderId: "187056092323",
  appId: "1:187056092323:web:89774fd05170d8776cfb16"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
