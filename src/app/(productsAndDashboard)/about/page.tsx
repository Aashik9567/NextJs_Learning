import React from 'react'
export const metadata = {
  title: {
    absolute: 'About Page', // breaking away from parent title ovverrides the parent title
  },
  description: 'This is the about page of the Next.js application.'
}
const page = () => {
  return (
    <div className='bg-gray-700 text-white p-4'>
     <h1>about page </h1> 
      <p>This is the about page of the Next.js application.</p>
    </div>
  )
}

export default page
