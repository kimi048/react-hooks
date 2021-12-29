import React, { useEffect } from 'react'

const Post = ({ item }) => {

  useEffect(() => {
    console.log("post mounted");
    return () => {
      console.log("component exit")
    }
  },[])

  return (
    <div >
      <hr />
      <div>name: {item.name}</div>
      <div>body: {item.body}</div>
    </div>
  )
 }
export default Post;
