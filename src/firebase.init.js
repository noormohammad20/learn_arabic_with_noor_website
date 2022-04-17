import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDOvM4BXJmWkOcHJ64sfhQfs9gtkS0Gqqk",
    authDomain: "learn-arabic-with-noor.firebaseapp.com",
    projectId: "learn-arabic-with-noor",
    storageBucket: "learn-arabic-with-noor.appspot.com",
    messagingSenderId: "378746236154",
    appId: "1:378746236154:web:ec509380963e0ced036d43"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth