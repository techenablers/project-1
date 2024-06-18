import React, { useState } from "react";
import JoinNow from "./components/join-now/join-now";
import "./App.css";
import NavHeader from "./NavHeader";
import LogIn from "./components/LogIn";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      {/* <button onClick={openModal} className='join-now'>Join Now</button>
      <JoinNow isModalOpen={isModalOpen} closeModal={closeModal} /> */}
      <NavHeader
        setModalOpen={setModalOpen}
        isModalOpen={isModalOpen}
        setIsLogInModalOpen={setIsLogInModalOpen}
        isLogInModalOpen={isLogInModalOpen}
      />
      {/* <LogIn/> */}
    </div>
  );
};

export default App;
