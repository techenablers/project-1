import React, { useState } from 'react';
import JoinNow from './components/join-now/join-now';
import './App.css';
import NavHeader from './NavHeader';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      {/* <button onClick={openModal} className='join-now'>Join Now</button>
      <JoinNow isModalOpen={isModalOpen} closeModal={closeModal} /> */}
      <NavHeader/>
    </div>
  );
};

export default App;