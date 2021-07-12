import React,{useState} from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase"

function Login() {
    const history = useHistory();  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

        //firebase 
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if(auth) {
                history.push('/')
            }
         })
        .catch(error => alert(error.message))
        //firebase
    }

    return (
        <div classname="login">
            <div><Link to='/'>
                <img className="login__logo" src="./img/Amazon_logo.svg" alt="logo" />
            </Link>
            </div>

            <div className="login__container">
                <h1>Sign-in</h1>
            
            <form>
                <h5>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange= {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange= {e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn}className="login__signin_btn">Sign-in</button>
                </h5>
            </form>
            <p>By continuing, you agree to Amazon clone's Conditions Conditions of Use and Privacy Notice.</p>

            <button  onClick={register}className="login__reg_btn">Create New AmazonC Account</button>
            </div>

        </div>

    )
}

export default Login
