import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChAaf0cVJ1g2s3UtQ4WD_JGq7rSVC4YKU",
  authDomain: "anchovy-pizza-fc17e.firebaseapp.com",
  projectId: "anchovy-pizza-fc17e",
  storageBucket: "anchovy-pizza-fc17e.appspot.com",
  messagingSenderId: "760035910248",
  appId: "1:760035910248:web:2ac5367a8cac8ecb8f51dd",
  measurementId: "G-FLSK1GCRR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
