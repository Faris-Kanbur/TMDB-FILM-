import firebase from 'firebase/app';
import 'firebase/auth';


const devConfig = {
    apiKey: "AIzaSyDOSszy-t-qNrWlyoz3D9vS5bUly1dc3GU",
    authDomain: "imbd-film.firebaseapp.com",
    projectId: "imbd-film",
    storageBucket: "imbd-film.appspot.com",
    messagingSenderId: "880259509671",
    appId: "1:880259509671:web:2c0e9b6c0697e462ee1a82"
  };

  const prodConfig = {};

  const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

  

  class Firebase {
      constructor() {
          firebase.initializeApp(config);
          this.firebaseAuth = firebase.auth();
      }

      async register (displayName, email, password){
          
        try {

            await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
            this.firebaseAuth.currentUser.updateProfile({
                displayName,
            });

        } catch (error) {
            console.log("F. Error:", error );
        }
      }

      useGoogleProvider(){
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        googleProvider.setCustomParameters({ prompt: "select_account" });
        this.firebaseAuth.signInWithPopup(googleProvider);
      }

  }

  export default new Firebase();