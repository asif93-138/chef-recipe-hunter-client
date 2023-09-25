import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';

const auth = getAuth(app);
export const signedout = () => {
       
  signOut(auth).then(() => {
   
  }).catch((error) => {
    console.log(error);
  });
  
}
const LogIn = () => {
    const {loggedinuser, setLoggedinuser} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = useLocation().state?.from.pathname || '/';
    const [error, setError] = useState('');
    const [gError, setGError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogIn = (event) => {
      event.preventDefault();
      setSuccess(''); setError('');
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(email, password);
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    
    event.target.reset();
    setSuccess('Successful!'); setLoggedinuser(user); navigate(from, {replace:true}); console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage); console.log(errorCode, errorMessage);
  });

    }
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleSignIn = () => {
      setGError('');
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        
        setLoggedinuser(user); navigate(from, {replace:true});
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setGError(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }

      const githubSignIn = () => {
        setGError('');
        signInWithPopup(auth, githubProvider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
      
          // The signed-in user info.
          const user = result.user;
          setLoggedinuser(user);  navigate(from, {replace:true});
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message; setGError(errorMessage);
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error); 
          // ...
        });
      }

      

    return ( <>
      <Form onSubmit={handleLogIn} className='container mt-4'>
      <article className='text-center'>
      <h4>Log In here!</h4>
      <p>Don't have an account <Link className='text-decoration-none' to='/signup'>register here</Link>!</p>
      </article>

      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required />
    <Form.Text className="text-muted">
      Email and password must be accurate!
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />
  </Form.Group>
  <p>{error}</p>
  <p>{success}</p>
  <Button variant="primary" type="submit">
    Submit
   </Button></Form><br /><br />
      {gError}
    { loggedinuser ? <><button onClick={signedout}>Log out</button></> : <><button onClick={googleSignIn}>Google Sign In</button> &nbsp; <button onClick={githubSignIn}>GitHub Signin</button></>}{loggedinuser && <><p>user : {loggedinuser.displayName}</p><p>email : {loggedinuser.email}</p><img className='img-fluid' src={loggedinuser.photoURL} /></>}
    
    </>
    );
};

export default LogIn;