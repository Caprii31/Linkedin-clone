import { initializeApp } from 'firebase/app'
import{
    getFirestore , collection , getDocs
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA-E-EtXIELzgk_O83t9RTFmriXf7M5PHA",
    authDomain: "fir-cap-42c15.firebaseapp.com",
    projectId: "fir-cap-42c15",
    storageBucket: "fir-cap-42c15.appspot.com",
    messagingSenderId: "235703160782",
    appId: "1:235703160782:web:036c213417ad01dc50a59f",
    measurementId: "G-73KFYZBVVD"
  };

// init firebase
initializeApp(firebaseConfig)

const db = getFirestore()
export const auth = getAuth()
export const collectionRef = collection(db,'posts')




