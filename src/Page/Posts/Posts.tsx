
import React, { useState, useEffect } from 'react'

import { fetchPosts, fetchPostsType } from '../../services/fetchPosts'

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<fetchPostsType | string | []>([])

  useEffect( () => {
    fetchPosts()
     .then(data => setPosts(data))
  }, [])


  return (
    <div>
      {JSON.stringify(posts, null, 4)}
    </div>
  )
}

export default Posts