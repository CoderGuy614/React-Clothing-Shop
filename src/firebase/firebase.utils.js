import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAORonKRC4AP1J87BGCDE8kjg18gHMTpZ0",
  authDomain: "react-clothing-store-a781b.firebaseapp.com",
  databaseURL: "https://react-clothing-store-a781b.firebaseio.com",
  projectId: "react-clothing-store-a781b",
  storageBucket: "react-clothing-store-a781b.appspot.com",
  messagingSenderId: "619223419868",
  appId: "1:619223419868:web:381450f9dde72ceb6b9d19",
  measurementId: "G-GCWFWWLGCG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
