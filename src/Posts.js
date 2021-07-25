
import React,{ forwardRef} from 'react'
import { Avatar } from '@material-ui/core'
import './Post.css'
import CalenderIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CalenderIcon2 from '@material-ui/icons/ShareOutlined';
import CalenderIcon1 from '@material-ui/icons/ChatOutlined';
import CalenderIcon3 from '@material-ui/icons/SendOutlined';
import InputOptions from './InputOptions';

const Posts = forwardRef(({ name , description , message , photoUrl} , ref) => {
          return (
                    <div ref={ref} className="post">
                              <div className="post__headr">
                                        <Avatar />
                                        <div className="post__info">
                                        <h2>{name}</h2>
                                        <p>{description}</p>

                                        </div>
                              </div>

                              <div className="post_body">

                                        <p>{message}</p>
                              </div>

                              <div className="post__buttons">

                              <InputOptions  Icon={CalenderIcon} color="gray"  title="Like"   />
                              <InputOptions  Icon={CalenderIcon1} color="gray"  title="Comment"   />
                              <InputOptions  Icon={CalenderIcon2} color="gray"  title="Share"   />
                              <InputOptions  Icon={CalenderIcon3} color="gray"  title="Send"   />
                              </div>
                              
                    </div>
          )
})

export default Posts
