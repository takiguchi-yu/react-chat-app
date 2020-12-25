import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCESne2JiFv64Ab1Bzl0wjMx4hAJfFDdIc',
  authDomain: 'chatapptk.firebaseapp.com',
  projectId: 'chatapptk',
  storageBucket: 'chatapptk.appspot.com',
  messagingSenderId: '998167357003',
  appId: '1:998167357003:web:fe649e7c3bea1f1aa94fce',
  databaseURL: 'https://chatapptk-default-rtdb.firebaseio.com/',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
