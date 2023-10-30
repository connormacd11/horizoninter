import { Sora } from '@next/font/google';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Head from 'next/head';  // Importing Head from 'next/head'

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white ${sora.variable} font-sora relative`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;

