import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { champFont } from '@/public/font/font';

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <div className={`overflow-hidden mx-auto ${champFont.className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
