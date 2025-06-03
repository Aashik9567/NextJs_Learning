"use client";
import React, { use } from 'react'

const register = () => {
  return (
    <div>
        <h1 className='text-3xl'>Register Page</h1>
        <p>Welcome to the registration page. Please fill out the form below to create an account.</p>
        {/* Registration form can be added here */}
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default register
