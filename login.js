
import { auth } from "../firebase";
import{signInWithEmailAndPassword} from"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import{onAuthStateChanged} from"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";




const loginform = document.getElementById('login');
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    var form=e.target;
    var email = form.elements['email'].value;
    var password=form.elements['password'].value;
    console.log(email,password)

    signInWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
console.log('usser logged in:',cred)
if(cred._tokenResponse){
    sessionStorage.setItem('token',cred._tokenResponse.idtoken);
    sessionStorage.setItem('refreshToken',cred._tokenResponse.refreshToken);
    alert('login successful');
    window.location=`../Home/Home.html`;
}

    })
    .catch((err)=>{
        console.log('login failed',err.message);
        alert('login failed',err.message)
    })
})