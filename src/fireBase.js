import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const auth =firebase.initializeApp({
    apiKey: "AIzaSyCrYHjxFIqqcAE4mjGwSM-qXXKqgguPn3w",
    authDomain: "botostart-1364e.firebaseapp.com",
    projectId: "botostart-1364e",
    storageBucket: "botostart-1364e.appspot.com",
    messagingSenderId: "315571075511",
    appId: "1:315571075511:web:3ef9708fb6ab66fdda9032"
  }).auth();