import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen p-0 m-0">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
