// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_N3mbQ1V2tz-RjshF7VF9U7V3Gzj4Gro",
  authDomain: "corniche-store.firebaseapp.com",
  projectId: "corniche-store",
  storageBucket: "corniche-store.appspot.com",
  messagingSenderId: "413024643205",
  appId: "1:413024643205:web:442548f37e248f9c2ba1ec",
  measurementId: "G-QZ83YDW4K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// init services
export const db = getFirestore();

// collection ref
export const colRef = collection(db, "clothes")

// get collection data

export const getClothesData = async () => {
    try {
      const querySnapshot = await getDocs(colRef);
      const clothesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      return clothesData; // Return the fetched data
    } catch (error) {
      console.error("Error fetching clothes data:", error);
      return []; // Return an empty array if there's an error
    }
  };
  
