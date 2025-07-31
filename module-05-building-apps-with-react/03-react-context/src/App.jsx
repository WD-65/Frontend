//Organise imports from each folder with an index.js in every folder
import { Home, Profile, SignIn } from './pages';
import { Route, Routes } from 'react-router';

import { AuthContextProvider } from './context/AuthContext';
import MainLayout from './layout/MainLayout';

// import SignIn from './pages/SignIn';
// import Home from './pages/Home';
// import Profile from './pages/Profile';

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
