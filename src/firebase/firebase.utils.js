import firebase from 'firebase/app';
import 'firebase/auth';


const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUT_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_ID,
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