import { FC, PropsWithChildren } from 'react';
import { Footer, Navbar } from '../components/custom';

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
