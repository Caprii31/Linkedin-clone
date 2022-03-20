import React from 'react'
import image from '../../../utils/sidebar-cover.jpg'
import myImage from '../../../utils/my-img.jpg'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


function SideBar() {
  return (
    <div className="sidebar">
        <div className="upper__sidebar">
            <img src={image} alt="" className='sidebar__cover'/>
            <div className="sidebar__personalInfo">
              <img src={myImage} alt="" className='sidebar__avatar' />  
              <div className="my__info">
                <h3>ahmed kamal</h3>
                <p>front-end developer</p>
              </div>
            </div>
            <div className="sidebar__network">
              <p>connections</p>
              <h4>grow your network</h4>
            </div>
            <div className="sidebar__info">
              <p>access exclusive tools & insights</p>
              <div>
                <span></span>
                <h4>try premium for free</h4>
              </div>
            </div>
            <div className="sidebar__info sidebar__items">
              <BookmarkIcon fontSize="small" className="sidebar__icon"/>
              <h4>my items</h4>
            </div>
        </div>

        <div className="down__sidebar">
        <p>recent</p>
          <div className="recent__info">
            <PeopleAltIcon />
            <h4>this my recent</h4>
          </div>
          <div className="recent__info">
            <PeopleAltIcon />
            <h4>this my recent</h4>
          </div>
          <div className="recent__info">
            <PeopleAltIcon />
            <h4>this my recent</h4>
          </div>
          
        </div>
    </div>
  )
}

export default SideBar