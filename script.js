import { initializeApp } from 
"https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { 
getFirestore,
collection,
addDoc
} from 
"https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


// Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyAMJWp0Sdm8vctMVfaGA6KcfTkMRsadD20",
  authDomain: "corner-of-thoughts.firebaseapp.com",
  projectId: "corner-of-thoughts",
  storageBucket: "corner-of-thoughts.firebasestorage.app",
  messagingSenderId: "911520465493",
  appId: "1:911520465493:web:204adc0436e45820c08adc",
  measurementId: "G-VM0PZVEZSE"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// HTML elements

const input = document.getElementById("thoughtInput");
const button = document.getElementById("addBtn");


// Add new note

button.addEventListener("click", async () => {

    const text = input.value.trim();


    if(text === ""){
        alert("Write something first 🌱");
        return;
    }


    const noteData = {
        text: text,
        created: new Date()
    };


    try {

        await addDoc(
            collection(db,"notes"),
            noteData
        );


        console.log("Note saved:", noteData);


        input.value = "";


    } catch(error){

        console.log("Error saving note:", error);

    }

});


console.log("Corner of Thoughts loaded 🌱");