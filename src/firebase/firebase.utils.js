import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA00299y4MGsZg85MtOvhgmawB2-R4Zg5I",
  authDomain: "crwn-db-efae0.firebaseapp.com",
  databaseURL: "https://crwn-db-efae0.firebaseio.com",
  projectId: "crwn-db-efae0",
  storageBucket: "crwn-db-efae0.appspot.com",
  messagingSenderId: "701956353461",
  appId: "1:701956353461:web:3c7fb551a80755ab727dfc",
  measurementId: "G-HC2NN2Q7DT"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists){
    console.log("userAuth 21: ", userAuth);
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
      console.log("Error: ", error);
    }
  }
  return userRef;
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export default firebase;
