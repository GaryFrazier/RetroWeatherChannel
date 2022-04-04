import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/app/App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7vkIJsjLO_H4PaEbf0D1IpL7yxpflFg8",
  authDomain: "the-virtual-plaza-2d75b.firebaseapp.com",
  databaseURL: "https://the-virtual-plaza-2d75b.firebaseio.com",
  projectId: "the-virtual-plaza-2d75b",
  storageBucket: "the-virtual-plaza-2d75b.appspot.com",
  messagingSenderId: "1016264000644",
  appId: "1:1016264000644:web:25a3d6859e9bd50b7feed1",
  measurementId: "G-NCM6DZSTZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
