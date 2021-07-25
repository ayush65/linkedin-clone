import firebase from "firebase";

const firebaseConfig = {
          apiKey: "AIzaSyABC09iXqW5UwZFN0P1e9LvI-stk_sCwyk",
          authDomain: "linkedin-clone-32ed1.firebaseapp.com",
          projectId: "linkedin-clone-32ed1",
          storageBucket: "linkedin-clone-32ed1.appspot.com",
          messagingSenderId: "1010822360746",
          appId: "1:1010822360746:web:6a28e5f73266091ac82ad3"
        };

        const firebaseapp = firebase.initializeApp(firebaseConfig);
        const db = firebaseapp.firestore();
        const auth = firebase.auth();

        export { db,auth };