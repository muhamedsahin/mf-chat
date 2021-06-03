import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCaAZfxpD_tPQjghtE28uu0TPRp6EJ3RHU",
  authDomain: "unichat-262c1.firebaseapp.com",
  projectId: "unichat-262c1",
  storageBucket: "unichat-262c1.appspot.com",
  messagingSenderId: "997846209417",
  appId: "1:997846209417:web:89ce6f61ddd2c925200758"
}).auth()
