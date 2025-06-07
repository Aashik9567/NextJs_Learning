import React from 'react'

const blogPage = async() => {
  await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("intentional delay");
    }, 2000); 
  }); // Simulating a delay for demonstration purposes
  return (
    <div>
      <h1 >Blog Page </h1>
    </div>
  )
}

export default blogPage
