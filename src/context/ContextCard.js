import React from 'react'
import MyContext from './context';

const ContextCard = () => {
  return (
    <div>
      
      <MyContext.Consumer>
        {(context) => (
          <>
            <h3>Name: {context.profile.username}</h3>
            <h3>LastName: {context.profile.lastname}</h3>
            <h3>Age: {context.profile.age}</h3>
          </>
        )}

      </MyContext.Consumer>
      
    </div>
  )
}
export default ContextCard;