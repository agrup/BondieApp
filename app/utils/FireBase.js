import firebase from 'firebase'

//<!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN80VlmOG_mEkxn4EMA5DR3XRGGL0vMV0",
    authDomain: "arduinohome-1e847.firebaseapp.com",
    databaseURL: "https://arduinohome-1e847.firebaseio.com",
    projectId: "arduinohome-1e847",
    storageBucket: "arduinohome-1e847.appspot.com",
    messagingSenderId: "344724584812",
    appId: "1:344724584812:web:db2ad928f3816599715b49",
    measurementId: "G-0DF9X481YL"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig);

