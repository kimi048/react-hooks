import React, { useState, useEffect } from 'react';
import Post from './post';
const App = ({ initialCount }) => {
  
  let [count, setCount] = useState(initialCount);
  let [posts, setPosts] = useState([
    {
      name: 'Super awesome hooks',
      body:'Everything is awesome when you are part of a team'
    }
  ]);
  
  const addOne = () => {
    setCount(count +1)
  }
  
  const restOne = () => {
    setCount(prevCount=>(prevCount-1))
  }
  
  const addOnePost = () => {
    let newpost = {
      name: 'Super awesome hooks2',
      body:'Everything is awesome when you are part of a team2'
    }
    setPosts([...posts,newpost])
  }
  
  const removePost = () => {
    setPosts([])
  }

  // useEffect(() => {
  //   console.log(count)
  // }, [count])
  
  // useEffect(() => {
  //   console.log("MOUNTED")
  // },[])
  
  return (
    <>
      <h3>Count: { count }</h3>
      <button onClick={addOne}>add one</button>
      <button onClick={restOne}>rest one</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      
      {
        posts.map((item, i)=>(
          <Post item={item} key={i}/>
      ))
      }
      <button onClick={addOnePost}>add one more post</button>
      <button onClick={removePost}>remove posts</button>
    </>
  )
}

export default App;
