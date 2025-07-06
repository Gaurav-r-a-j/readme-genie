import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-background transition-all duration-500">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
