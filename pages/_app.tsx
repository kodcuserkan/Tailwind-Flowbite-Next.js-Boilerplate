import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // const verifyTheme =
  //   typeof window !== 'undefined'
  //     ? localStorage.getItem('color-theme') === 'dark' ||
  //       (!('color-theme' in localStorage) &&
  //         window.matchMedia('(prefers-color-scheme: dark)').matches)
  //     : null;
  // useEffect(() => {
  //   const layout = document.getElementById('layout');
  //   if (verifyTheme && layout) {
  //     layout.classList.add('dark');
  //   } else if (layout) {
  //     layout.classList.remove('dark');
  //   }
  // }, [verifyTheme]);

  return (
    <>
      <Script id='dark-mode'>
        {`
           if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.getElementById('layout').classList.add('dark');
        } else {
            document.getElementById('layout').classList.remove('dark')
        }`}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
