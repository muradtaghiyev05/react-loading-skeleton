import React from 'react'
import './post.css'

const Post = ({ video }) => {
  return (
    <div className='post'>
        <div className='postImgContainer'>
            <img src={video.img} alt='video' />
            <span className='postDuration'>13:05</span>
        </div>
        <div className='postInfoContainer'>
            <img className='postAvatar' src={video.channel.avatar} />
            <div className='postInfo'>
                <span className='postTitle'>{video.channel.name}</span>
                <span className='postChannel'>{video.channel.name}</span>
                <span className='postDetail'>{video.views} views ● {video.date}</span>
            </div>
        </div>
    </div>
  )
}

export default Post