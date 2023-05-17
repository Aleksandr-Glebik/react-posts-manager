
import React, { useState, useEffect } from 'react'
import styles from './Posts.module.scss'

import { fetchPosts, fetchPostsType } from '../../services/fetchPosts'
import PostCard from '../../components/PostCard/PostCard'
import { ObjFormType } from '../CreatePost/CreatePost'

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<fetchPostsType | string | []>([])

  useEffect( () => {
    fetchPosts()
     .then(data => setPosts(data))
  }, [])

  return (
    <div
      className={styles.container}
    >
      {Array.isArray(posts) && posts.map((item: ObjFormType, ind: number) => (
        <PostCard
          key={`${ind}_${item.name}`}
          {...item}
        />))}
    </div>
  )
}

export default Posts