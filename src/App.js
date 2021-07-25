import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';
import Feed from './Feed';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import Widgits from './Widgits';

function App() {
        const dispatch = useDispatch();

  useEffect(()  => {
      auth.onAuthStateChanged(userAuth => {
        if(userAuth) {
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.profilepic,
          }))

        }else{
              dispatch(logout( ));
        }
      })
  }, [])

      const user = useSelector(selectUser);

  return (
    <div className="app">

      <Header/>


        {!user ? (
          <Login />
        )  : (
          <div className="linked__body">
          <SideBar />
          <Feed />
          <Widgits/>
        </div>
   

        )
        }
        
    </div>
  );
}

export default App;
