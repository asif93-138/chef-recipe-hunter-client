import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';

const SineUp = () => {  
  const {loggedinuser} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 

  

  const handleRegisterSubmit = (event) => {
        event.preventDefault();
        setEmail(event.target.email.value);
        setPassword(event.target.password.value);
        setSuccess('');
        setError('');
        console.log(event.target.email.value, event.target.password.value);
        console.log(event.target.text.value, event.target.url.value);
        createUserWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setSuccess('Successful!');
            updateProfile(user, {
              displayName: event.target.text.value, photoURL: event.target.url.value
            }).then(() => {
              event.target.reset(); console.log(user);
            }).catch((error) => {
              console.log(error);
            });
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            console.log(errorCode, errorMessage);
            })
        

  }
  const auth = getAuth(app);
  {/* <form onSubmit={handleRegisterSubmit}>
          <input onChange={handleEmailChange} type='email' name='email' id='email' placeholder='email' />
          <input onBlur={handlePassword} type='password' name='password' id='password' placeholder='password' />
          <input type='submit' value='submit' />
        </form> */}
    return (
        <>
          { (loggedinuser) ? <h3>Please logout first!!</h3> : <Form onSubmit={handleRegisterSubmit} className='container mt-4'>
        <h4 className='text-center'>Sign up here!</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <input className='form-control' name='text' type="text" placeholder="user name" required />
        <Form.Label>Photo</Form.Label>
        <input className='form-control' name='url' type="url" placeholder="Photo URL" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
        Email must be valid!
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <p>{error}</p>
        <p>{success}</p>
        <Button variant="primary" type="submit">
        Submit
        </Button>

      </Form> }
        </>
    );
};

export default SineUp;