"use strict";

import "@styles/styles.css";
import "@styles/button.css";

import "@styles/header.css";
import "@styles/main.css";
import "@styles/footer.css";

import "@styles/book-list.css";
import "@styles/book-item.css";

import "@modules/navigation.js";
import "@modules/routing.js";

import { initializeApp } from "firebase/app";
import { changeRoute } from "@modules/routing";

// import { initialize } from "@modules/mock_data";
// initialize()


const firebaseConfig = {
  apiKey: "AIzaSyDeWqn8q0-DMLGAP0jpfFhZ5WSgtwZ7ncM",
  authDomain: "bookstore-a6f57.firebaseapp.com",
  databaseURL:
    "https://bookstore-a6f57-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookstore-a6f57",
  storageBucket: "bookstore-a6f57.appspot.com",
  messagingSenderId: "950631887480",
  appId: "1:950631887480:web:edd22aee1708f8ee7cb38d",
};

initializeApp(firebaseConfig);
