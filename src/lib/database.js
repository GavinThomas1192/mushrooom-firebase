import firebase from 'firebase';

const config = {
    apiKey: `${__FIREBASE_API_KEY__}`,
    authDomain: `${__FIREBASE_AUTH_DOMAIN__}`,
    databaseURL: `${__FIREBASE_DB_URL__}`
};

console.log(`${__FIREBASE_DB_URL__}`);

firebase.initializeApp(config);
const database = firebase.database();

export default database;