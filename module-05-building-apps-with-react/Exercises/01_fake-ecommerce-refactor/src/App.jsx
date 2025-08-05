import { Route, Routes } from 'react-router';

import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='category/:category' element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
