import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (

    <div className='flex items-center justify-center min-h-screen p-5'>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-semibold py-5 text-center">Login Your Account!</h1>

      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='text-center text-accent pt-2'>Don't have an account?<Link className='text-green-400' to='/auth/register'>Register</Link></p>
      </div>
    </div>
    </div>
 
  );
};

export default Login;