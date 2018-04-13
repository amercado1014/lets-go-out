import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBcdjsk8ijIbqaA5RwkZI-Fga0eg4wN-Eo",
  authDomain: "let-s-order-out.firebaseapp.com",
  databaseURL: "https://let-s-order-out.firebaseio.com",
  projectId: "let-s-order-out",
  storageBucket: "let-s-order-out.appspot.com",
  messagingSenderId: "854964870347"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
