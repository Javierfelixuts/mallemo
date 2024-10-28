import React from 'react'

const TestingComponent = () => {
   
    const handleClick = () => {
        console.log("OK");
    }
  return (
    <div onClick={handleClick}>TestingComponent</div>
  )
}

export default TestingComponent