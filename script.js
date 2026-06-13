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
  appId: "1:911520465493:web_204adc0436e45820c08adc",
  measurementId: "G-VM0PZVEZSE"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



// Elements

const input = document.getElementById("thoughtInput");

const button = document.getElementById("addBtn");

const toolbox = document.getElementById("toolbox");

const openToolbox = document.getElementById("openToolbox");

const preview = document.getElementById("notePreview");

const themeButtons =
document.querySelectorAll(".theme-btn");

const styleButtons =
document.querySelectorAll(".style-btn");



// Selected options

let selectedTheme = "yellow.png";

let selectedStyle = "style-1";




// Open toolbox

openToolbox.addEventListener("click",()=>{

    toolbox.classList.toggle("open");

});




// Preview text

input.addEventListener("input",()=>{

    preview.textContent =
    input.value || "Your thought...";

});





// Theme selection

themeButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        selectedTheme =
        button.dataset.theme;


        updatePreview();


    });


});





// Style selection

styleButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        selectedStyle =
        button.dataset.style;


        updatePreview();


    });


});





// Update preview

function updatePreview(){


    preview.className =
    `note-preview ${selectedStyle}`;


    preview.style.backgroundImage =
    `url(themes/${selectedTheme})`;

}





// Add note

button.addEventListener("click", async()=>{


    const text =
    input.value.trim();



    if(text===""){

        alert("Write something first 🌱");

        return;

    }




    const noteData = {


        text:text,


        theme:selectedTheme,


        style:selectedStyle,


        created:new Date()

    };





    try{


        await addDoc(

            collection(db,"notes"),

            noteData

        );



        console.log(
        "Note saved:",
        noteData
        );



        input.value="";


        preview.textContent =
        "Your thought...";



    }

    catch(error){

        console.log(
        "Error saving note:",
        error
        );

    }



});



console.log("Corner of Thoughts loaded 🌱");