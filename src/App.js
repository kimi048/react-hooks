import React, { useState } from 'react';

const App = ({initialCount}) => {
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
  return (
    <>
      <h3>Count: { count }</h3>
      <button onClick={addOne}>add one</button>
      <button onClick={restOne}>rest one</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      
      {
        posts.map((item, i)=>(
        <div key={i}>
          <hr />
          <div>name: {item.name}</div>
          <div>body: {item.body}</div>
        </div>
      ))
      }
      <button onClick={addOnePost}>add one more post</button>
    </>
  )
}

export default App;
