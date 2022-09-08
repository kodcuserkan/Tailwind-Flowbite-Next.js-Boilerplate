import Head from 'next/head';
import React from 'react';
import CustomNavbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Head>
        <title>Tailwind Flowbite Next Boilerplate</title>
        <meta name='description' content='Created by github.com/kodcuserkan' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CustomNavbar />
    </header>
  );
};

export default Header;
