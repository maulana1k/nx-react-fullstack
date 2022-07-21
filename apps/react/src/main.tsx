import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDw7WOfr8x4AauNAEFrLws52rlXzssK-P4',
  authDomain: 'nx-react-e6ab7.firebaseapp.com',
  projectId: 'nx-react-e6ab7',
  storageBucket: 'nx-react-e6ab7.appspot.com',
  messagingSenderId: '418070532951',
  appId: '1:418070532951:web:e7edbf58f2896e828d2412',
  measurementId: 'G-XJHD6KNC3L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
