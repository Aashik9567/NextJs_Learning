"use client";

const login = () => {
  return (
    <div>
        <h1 className='text-3xl'>Login Page</h1>
        <p>Welcome to the login page. Please enter your credentials to continue.</p>
        <form className="mb-4 bg-amber-200 p-2 rounded-md">
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default login
