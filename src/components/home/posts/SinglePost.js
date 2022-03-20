import { Avatar } from '@mui/material'
import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="post__info">
            <div className="left__post">
                <Avatar sx={{ width: 50 , height: 50  }} />
                <div className="author__info">
                    <h4>Ahmed kamal</h4>
                    <p>title</p>
                <div className="extra__info">
                    <p>2hr</p>
                    <PublicIcon fontSize="small" sx={{ color:'#666666' }} />
                </div>
                </div>
            </div>
            <div className="post__options">
                <MoreHorizIcon fontSize="large" sx={{ mt: -1 }} style={{ color: '#666666' }} />
            </div>
        </div>
        <div className="main__post">
            <p>hey my name is ahmed kamal am graduated from faculty of law i started front learning front-end from about year ago i started with cs50 it taught me basics of com science and then i took fromt-end nanodegree from udacity </p>
        </div>
        {/* likes comment */}
    </div>
  )
}

export default SinglePost