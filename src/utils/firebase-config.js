import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDNf9Xl-SD0pUji7azvjPqEkR1S9qEll4Q',
  authDomain: 'react-netflix-clone-3a9bb.firebaseapp.com',
  projectId: 'react-netflix-clone-3a9bb',
  storageBucket: 'react-netflix-clone-3a9bb.appspot.com',
  messagingSenderId: '1021832514357',
  appId: '1:1021832514357:web:1300b7cfbc76b5d0c65a7c',
  measurementId: 'G-16WZ3X7MVK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
