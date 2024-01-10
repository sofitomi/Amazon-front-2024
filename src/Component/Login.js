import {Link, useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import "./Login.css"
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {

const[email,setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const signIn = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      if(userCredential)
      navigate("/")
    })
    .catch((error)=> alert(error.message));
};

const register = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      if(userCredential)
      navigate("/")
    })
    .catch((error)=>{
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

  return (
    <div className="login">
      <Link to = '/'>
        <img
          className="login_logo"
          src="https://letsdovideo.com/wp-content/uploads/2016/11/Amazon_Logo.jpg"
        />
      </Link>
      <div className="login_container">
        <h1>sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use
          Sale. please see your privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login
