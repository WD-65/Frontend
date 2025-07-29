import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Character from './pages/Character.jsx';
import Contact from './pages/Contact.jsx';

import About from './pages/About.jsx';

function App() {
  const [date, setDate] = useState(new Date());

  const [characters, setCharacters] = useState(null);

  // useEffect(what?, when?)

  useEffect(() => {
    // Effect
    fetch('https://swapi.tech/api/people')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home characters={characters} />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About date={date} />} />
        <Route path='characters/:characterId' element={<Character />} />
      </Route>

      <Route path='dashboard' element={<p>Welcome to the dashboard</p>}></Route>
    </Routes>
  );
}

export default App;
