import { Outlet } from 'react-router';
import Navbar from '../components/Navbar.jsx';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>&copy; '25</footer>
    </>
  );
};

export default MainLayout;
