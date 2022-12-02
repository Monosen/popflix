import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../components/custom/Navbar';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Main;
