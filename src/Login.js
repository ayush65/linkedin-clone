import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {

          const [email , setEmail] = useState('');
          const [name , setName] = useState('');
          const [password , setPassword] = useState('');
          const [profilepic, setProfile] = useState('');
          const dispatch = useDispatch();

          const logintapp = (e) => {
                    e.preventDefault();
                    auth.signInWithEmailAndPassword(email, password)
                    .then((userAuth) =>{
                              dispatch(
                                        login({
                                                  email: userAuth.user.email,
                                                  uid: userAuth.user.uid,
                                                  displayName: userAuth.user.displayName,
                                                  photoUrl: userAuth.user.profilepic,
                                        })
                              )
                    } ).catch(error => alert(error));
          };
          const register = () => {
                    if (!name){
                              return alert("Please enter the full name");
                    
                    }
                    auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
                              userAuth.user.updateProfile({
                                        displayName: name,
                                        photoUrl: profilepic,
                              })
                              .then(() => {
                                                  dispatch(login({
                                                             email: userAuth.user.email,
                                                             uid: userAuth.user.uid,
                                                             displayName: name,
                                                             photoUrl: profilepic
                                                  }))
                              })
                    }).catch(error => alert(error));
          };

          return (
                    <div className="login">
                              <img src='https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2003.png' alt=""></img>


                    <form>
                              <input  value={name} onChange={(e) => setName(e.target.value)} placeholder='Fullname required if registered' type="text"  />
                              <input    value={profilepic} onChange={(e) => setProfile(e.target.value)} placeholder='profile picture Url(Optional)' type="text" />
                              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />
                              <input   value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />

                              <Button type='submit' onClick={logintapp}>Sign In</Button>
                    </form>


                    <p>Not a member?  
                              <span className="register_login" onClick={register}>
                                         Register Now
                              </span>
                    </p>


                    </div>
          )
}

export default Login
