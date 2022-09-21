import React from 'react';
import ChatApp from './src/ChatApp';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlPxVg3xCpTJ8ZrSBlOf16Mw0NZWTZp2c",
  authDomain: "chat-3d1a1.firebaseapp.com",
  databaseURL: "https://chat-3d1a1-default-rtdb.firebaseio.com",
  projectId: "chat-3d1a1",
  storageBucket: "chat-3d1a1.appspot.com",
  messagingSenderId: "634206675321",
  appId: "1:634206675321:web:7ef0614a6dc02071a00fa8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return <ChatApp />;
};

export default App;
