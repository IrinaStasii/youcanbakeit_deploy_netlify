import React from 'react';
import './layout.css';
import AppRouter from '../router/AppRouter';
import TopBanner from './top_banner/TopBanner';
import Logo from './logo/Logo';
import Navigation from './navbar/Navigation';
import Aside from './aside/Aside';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <>
      <div id='beforeNavBar' className='navbar'>
        <TopBanner />
      </div>

      {/* Layout content */}
      <div id='fullPageContent'>
        <Logo />
        <Navigation />

        <div className='flex_page_aside'>
          <AppRouter />

          {/* About section (right side of teh page) */}
          <Aside />
        </div>

        {/* Footer content */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
