import './App.css';
import React from 'react'
import WellnessModal from './components/modal';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  console.log()
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <WellnessModal />
    </div>
  );
}

export default App;
