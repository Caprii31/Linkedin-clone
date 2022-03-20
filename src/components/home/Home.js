import React from 'react'
import SideBar from './sidebar/SideBar';
import Posts from './posts/Posts';

function Home() {
  return (
    <div className="home">
        <SideBar />
        <Posts />
    </div>
  )
}

export default Home