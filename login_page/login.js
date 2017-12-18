
// Initialize Firebase
const config = {
    apiKey: "AIzaSyC4xJczHrcejbkI0VeKFnBVpeUkq6E_YFk",
    authDomain: "mikesmovies-c3799.firebaseapp.com",
    databaseURL: "https://mikesmovies-c3799.firebaseio.com",
    projectId: "mikesmovies-c3799",
    storageBucket: "mikesmovies-c3799.appspot.com",
    messagingSenderId: "840246158041"
  };
  firebase.initializeApp(config);

//Get Elements
const txtEmail = document.getElementById('txtEmail')
const txtPassword = document.getElementById('txtPassword')
const btnLogin = document.getElementById('btnLogin')
const btnSignup = document.getElementById('btnSignup')


//Add Login event
btnLogin.addEventListener('click', e => {
    //get email and password
    const email = txtEmail.value
    const pass = txtPassword.value
    const auth = firebase.auth();

//sign in
const promise = auth.signInWithEmailAndPassword(email, pass)

promise.catch(e => console.log(e.message))
promise.catch(e => alert("User not found"))

})

//Add sign up event
btnSignup.addEventListener('click', e => {

//Get email and pass
//TO DO: CHECK FOR REAL EMAIL

const email = txtEmail.value
const pass = txtPassword.value
const auth = firebase.auth();

const promise = auth.createUserWithEmailAndPassword(email, pass)

})


//Add a realtime listener

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser)
        window.location = '../user_page/user_home.html'; //After successful login, user will be redirected to home.html
            }
          
    else {
        console.log('Not logged in')
        btnLogout.classList.add('hide')
    }
})
