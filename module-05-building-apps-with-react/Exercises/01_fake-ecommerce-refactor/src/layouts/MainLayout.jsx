import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { useState } from 'react';

const MainLayout = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar cart={cart} />
      <main className='flex-1 bg-slate-700 py-4 px-6'>
        <Outlet context={{ cart, setCart }} />
      </main>

      <Footer />
    </div>
  );
};
export default MainLayout;
