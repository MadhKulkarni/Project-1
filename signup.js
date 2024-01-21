

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const signupform=document.getElementById('signup')

signupform.addEventListener('submit',(e)=>{
e.preventDefault();
var form=e.target;
var email = form.elements['email'].value;
var password=form.elements['password'].value;
createUserWithEmailAndPassword(auth,email,password)
.then((cred) => {

    console.log('user created:',cred.user);
    alert('user created',cred.user);
    signupform.reset();
})
    .catch((err)=>{
        console.log(err.message);
        alert('Error signing up: ' + err.message);

    })
})
    