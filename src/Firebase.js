import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyA1foPvxyr4WmhOySLu49PCnJpHI5I2-eo",
    authDomain: "test-75428.firebaseapp.com",
    databaseURL: "https://test-75428.firebaseio.com",
    projectId: "test-75428",
    storageBucket: "test-75428.appspot.com",
    messagingSenderId: "561253069134",
    appId: "1:561253069134:web:f6528f04e4b29284a86e1f"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);


export default firebase;