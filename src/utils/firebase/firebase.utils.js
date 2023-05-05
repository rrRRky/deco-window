import { initializeApp } from "firebase/app";
import {
        getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider,
    } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from  "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDaGXFD83sbTmW3DNHSioBdv48mrWzfD4I",
  authDomain: "rakesh-project-db.firebaseapp.com",
  projectId: "rakesh-project-db",
  storageBucket: "rakesh-project-db.appspot.com",
  messagingSenderId: "862111866683",
  appId: "1:862111866683:web:c4c0d1d994f8f8bb3f211e"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const{ displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc( userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log ('error creating the user', error.message);
        }
    }
    return userDocRef;
};