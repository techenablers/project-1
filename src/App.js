import React, { useState } from 'react';
import JoinNow from './components/join-now/join-now';
import './App.css';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal} className='join-now'>Join Now</button>
      <JoinNow isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;