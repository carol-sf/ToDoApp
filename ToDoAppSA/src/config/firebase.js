import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA6BFesYsCHSK_7kCn3e4mK0nCfeFs8fA4',
  authDomain: 'todoappsa-6baab.firebaseapp.com',
  projectId: 'todoappsa-6baab',
  storageBucket: 'todoappsa-6baab.appspot.com',
  messagingSenderId: '790795604426',
  appId: '1:790795604426:web:fa70cfb002ad3ee30bbf33',
  measurementId: 'G-TLYH8X6PXD'
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
