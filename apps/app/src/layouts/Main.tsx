import { FC, PropsWithChildren } from 'react';
import { Footer } from '../components/custom/Footer';
import { Navbar } from '../components/custom/Navbar';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5">{children}</div>
      <Footer />
    </>
  );
};

export default Main;
