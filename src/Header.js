import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';

import { useDispatch, useSelector } from 'react-redux';
import  { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';



function Header() {

 

    const dispatch = useDispatch();

    const logoutofApp = ()  => {
         dispatch(logout());
         auth.signOut(); 
    };



    return (
                <div className='header'>


                    <div className='header__left' >

                    <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                    <div className="header__search">
                            <SearchIcon />
                            <input placeholder='Search' type="text" />

                    </div>
                    </div>

                <div className="header__right">

                    <HeaderOptions Icon= {HomeIcon } title="Home" />
                    <HeaderOptions Icon= {SupervisorAccount } title="My Network" />
                    <HeaderOptions Icon= {BusinessCenterIcon } title="Jobs" />
                    <HeaderOptions Icon={ChatIcon} title="Messaging" />
                    <HeaderOptions   Icon= {NotificationIcon } title="Notifications" />
                   
                    <HeaderOptions  avatar={true} title="Me" onClick={logoutofApp}/>

                  
                    
                

                </div>
                 </div>


    )
}

export default Header
