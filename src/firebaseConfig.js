import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCACdwrvS0-zCEds2z8ybKehrzWP-OG7E4",
  authDomain: "comercio-react-3268e.firebaseapp.com",
  projectId: "comercio-react-3268e",
  storageBucket: "comercio-react-3268e.appspot.com",
  messagingSenderId: "140182671134",
  appId: "1:140182671134:web:582589d37062f32290c30f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);