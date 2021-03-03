import React from 'react';

import Hero from './components/Hero';
import Navbar from './components/Nav';
import NowPlaying from './components/NowPlaying';

function App() {

   return (
      <>
         <Navbar />
         <Hero />
         <NowPlaying />
      </>
   );
}

export default App;
