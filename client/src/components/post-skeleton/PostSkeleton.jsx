import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PostSkeleton = ({ posts }) => {

  return Array(posts).fill(0).map((item, index) => {

    return (
      <div className='postSk' style={{ margin: '1rem' }}>
        <div className='postImgSk'>
            <Skeleton width='320px' height={170} />
        </div>
        <div className='postInfoSk' style={{ display: 'flex', marginTop: '1rem' }}>
          <div className='avatarSk'>
            <Skeleton circle width={40} height={40} style={{ marginRight: '.4rem' }} />
          </div>
          <div style={{ flex: '1' }}>
            <Skeleton />
            <Skeleton style={{ width: '50%', marginTop: '.4rem' }} />
          </div>
        </div>
    </div>
  )
})
}

export default PostSkeleton