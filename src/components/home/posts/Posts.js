import React from 'react'
import myImage from '../../../utils/my-img.jpg'
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FeedIcon from '@mui/icons-material/Feed';
import PostOption from './PostOption';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SinglePost from './SinglePost';

function Posts() {
  return (
    <div className="posts">
        <div className="post__input">
            <div className="upper__postInput">
                <img src={myImage} alt="" />
                <form action="">
                    <input type="text" value='Start a post' />
                    <button>post</button>
                </form>
            </div>
            <div className="down__postInput">
                <PostOption title='photo' Icon ={ImageIcon} color='#70B5F9' />     
                <PostOption title='video' Icon ={OndemandVideoIcon} color='#7FC15E' />     
                <PostOption title='event' Icon ={EventNoteIcon} color='#E7A33E' />     
                <PostOption title='write article' Icon ={FeedIcon} color='#F8A8AA' />     
            </div>

            
        </div>
        <div className="sort__posts">
            <hr />
            <p>sort by : <span>top</span></p>
            <ArrowDropDownIcon />
                
        </div>
        <SinglePost />
    </div>
  )
}   

export default Posts