
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF27yconiLkZPVu7Xh-B2V8HCFlYefNFk",
  authDomain: "bispayer.firebaseapp.com",
  projectId: "bispayer",
  storageBucket: "bispayer.appspot.com",
  messagingSenderId: "446409050639",
  appId: "1:446409050639:web:4d9dce21a7bbe7e884b17a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;