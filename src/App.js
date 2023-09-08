import React, { useState, useEffect } from 'react';
import Body from './body'
import './styles/main.scss';
import Header from './header'
import './styles/responsive.scss';

sessionStorage.setItem('searchq', '')
function App() {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth - 20);
  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth - 20);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="container" style={{ width: browserWidth }}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
