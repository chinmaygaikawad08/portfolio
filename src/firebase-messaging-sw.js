importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBHjfu5_sM5FyDkVpgqIJ1DJsot3EAIzcg",

    authDomain: "hopfirst-65914.firebaseapp.com",
  
    databaseURL: "https://hopfirst-65914.firebaseio.com",
  
    projectId: "hopfirst-65914",
  
    storageBucket: "hopfirst-65914.appspot.com",
  
    messagingSenderId: "189210679564",
  
    appId: "1:189210679564:web:a74c91b1370c1a55981129",
  
    measurementId: "G-QN9GJ1V0P2",
});
firebase.initializeApp({

    'messagingSenderId': "189210679564",

});
const messaging = firebase.messaging();


