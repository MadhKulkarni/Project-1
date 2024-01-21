import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCv3rWprNd_gdWryf9C102y79zzwWVVSB8",
  authDomain: "webb-cc6b8.firebaseapp.com",
  databaseURL: "https://webb-cc6b8-default-rtdb.firebaseio.com",
  projectId: "webb-cc6b8",
  storageBucket: "webb-cc6b8.appspot.com",
  messagingSenderId: "766511132508",
  appId: "1:766511132508:web:6fc91054fc83c6f76fdb99"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth,"http://localhost:9899");
constloginEmailPassword=async()=>{
 const loginEmail = txtEmail.value;
 const loginPassword = txtPassword.value;
 const userCredential = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
 console.log(userCredential.user);
}
btnlogin.addEventlistener("click",loginEmailPassword);