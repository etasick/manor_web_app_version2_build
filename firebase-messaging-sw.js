// This must be outside your main Dart code.
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: 'AIzaSyA7dtRdo006rRXxSDpqmq6AmByGMol5LzY',
    appId: '1:1073865429215:web:204dc994b0ed8ec5b4996a',
    messagingSenderId: '1073865429215',
    projectId: 'manor-570dc',
    authDomain: 'manor-570dc.firebaseapp.com',
    storageBucket: 'manor-570dc.firebasestorage.app',
    measurementId: 'G-YKM9W007RF',
});

const messaging = firebase.messaging();
