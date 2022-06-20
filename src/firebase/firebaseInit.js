import firebase from "firebase/app";
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDTFx_7OSUwQ_xZaS4n3O9fSNqWu0YQgJ4",
    authDomain: "umut-blog.firebaseapp.com",
    projectId: "umut-blog",
    storageBucket: "umut-blog.appspot.com",
    messagingSenderId: "1072380717217",
    appId: "1:1072380717217:web:52c424e807820c3509a8e0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();