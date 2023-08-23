import { Outlet } from 'react-router-dom';
import Heading from './Heading';

const RootLayout = () => {
  return (
    <>
      <Heading>pre-onboarding-12th-1-3</Heading>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
