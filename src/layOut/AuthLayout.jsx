import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='bg-base-200 min-h-screen top-0 z-50'>
      <header className='w-11/12 mx-auto py-5 sticky'>
        <Navbar />
      </header>
      <main className='w-11/12 mx-auto py-5'>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;