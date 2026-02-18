import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className='flex items-center justify-center min-h-screen p-5 sticky'>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-semibold py-5 text-center">Register Your Account!</h1>

      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Enter your name" />
          <label className="label">Photo Url</label>
          <input type="text" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className='text-center text-accent pt-2'>Already have an account?<Link className='text-green-400' to='/auth/login'>Login</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Register;