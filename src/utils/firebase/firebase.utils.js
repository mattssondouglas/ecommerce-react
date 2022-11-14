import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBKo3MxJLOOprkdtjhr5FE90YXogZKcW1A",
    authDomain: "ecommerce-react-6a411.firebaseapp.com",
    projectId: "ecommerce-react-6a411",
    storageBucket: "ecommerce-react-6a411.appspot.com",
    messagingSenderId: "49803010818",
    appId: "1:49803010818:web:6a9f2adc9fe189c5f1d81b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider()

  googleProvider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
  

  if(!userSnapshot.exists()) {
    const {username, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        username,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}