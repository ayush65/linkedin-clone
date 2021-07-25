import React, { useState , useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOptions from './InputOptions';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/EventNote';
import CalenderIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';



function Feed() {
      const user = useSelector(selectUser);
         const [input , setInput] = useState('');
          const [posts, setPosts] = useState([]);


       useEffect(() => {
                 db.collection("posts").orderBy("timestamp" , "desc").onSnapshot((snapshot) => 
                 setPosts(
                           snapshot.docs.map((doc) => ({
                              
                                        id: doc.id,
                                        data: doc.data(),
                               })
                           
                           
                           ) ))
               
       },[]);

          const sendpost = (e)  =>  {
                    e.preventDefault();

                    db.collection('posts').add({
                       name: user.displayName,
                       description: user.email,
                       message: input ,
                       photoUrl : user.photoUrl || "",
                       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    

                    });
                    setInput('');
          };


          return (
                    <div className="feed">
                               <div className="feed_inputcontainer" >
                              <div className="feed_input" >
                                        <CreateIcon />
                                        <form>
                                                  <input  value={ input } onChange={e => setInput(e.target.value)}  type="text" />
                                                  <button onClick={sendpost}  type="submit">Send</button>
                                        </form>


                              </div>
                              <div className="feed_inputoptions">
                                        <InputOptions  Icon={ImageIcon} color="#70B5F9"  title="Photo"   />
                                        <InputOptions  Icon={SubscriptionsIcon} color="#E7A33E"  title="Video"   />
                                        <InputOptions  Icon={EventIcon} color="#C0CBCD"  title="Event"   />
                                        <InputOptions  Icon={CalenderIcon} color="#75C15E"  title="Write Article"   />
                              </div>
                              </div>
                              <FlipMove>
                              {posts.map(({ id , data : { name , description , message , photoUrl}})  =>  (
                                       
                                        <Posts
                                        key={id}
                                        name={name}
                                        description={description}
                                        message={message}
                                        photoUrl={photoUrl}/>
                              ))}

                         </FlipMove>
                              
                    </div>
          )
}

export default Feed
