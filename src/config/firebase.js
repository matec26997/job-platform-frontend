// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function initializeFirebase() {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDBXo5C4SoCY3ogLKkoROZ-VH8XR_F56Xc",
      authDomain: "job-platform-1487f.firebaseapp.com",
      projectId: "job-platform-1487f",
      storageBucket: "job-platform-1487f.appspot.com",
      messagingSenderId: "659601614209",
      appId: "1:659601614209:web:5a70072e123866c759b480",
      measurementId: "G-7T9HSNXWQQ",
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }

  export default initializeFirebase;