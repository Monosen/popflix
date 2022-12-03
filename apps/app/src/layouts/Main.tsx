import { FC, PropsWithChildren } from 'react';
import { Footer } from '../components/custom/Footer';
import { Navbar } from '../components/custom/Navbar';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-5">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
