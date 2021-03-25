import React from 'react';
import Footer from './components/templates/Footer';
import Header from './components/templates/Header';
import Routers from './components/templates/Routers';

// main app start here
function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
