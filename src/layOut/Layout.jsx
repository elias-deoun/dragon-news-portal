import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import LatestNews from '../Components/LatestNews/LatestNews';
import LeftAside from '../Components/AsideLayout/LeftAside';
import RightAside from '../Components/AsideLayout/RightAside';

const Layout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>        
          </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>

      </header>
      <main className='w-11/12 mx-auto my-2 grid grid-cols-12 p-3 gap-5'>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Layout;