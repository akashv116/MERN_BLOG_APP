import React, { useEffect, useState } from 'react'
import Post from '../Post'


export default function IndexPage() {

  const [posts, setPosts] =  useState([]); 
  useEffect(()=>{
      fetch('https://mern-blog-app-s2nt.vercel.app/post').then(response=>{
          response.json().then(posts => {
              setPosts(posts);
          });
      })
  },[])
  return (
     <>
       {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
     </>
  )
}
