import './App.css';
import React, { useEffect } from 'react'
import WellnessModal from './components/modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import WellnessModalReadOnly from './components/modalReadOnly';
import { useDispatch } from "react-redux";
import { questions } from './reducers/questions';

function App() { 
  const dispatch = useDispatch();
  useEffect(() => {
    // initialize data store from local storage and update on the save modal later
    dispatch(questions.actions.setAllQuestions(JSON.parse(localStorage.getItem("questionnaires")) || []));
}, []);
  return (
    <div
     style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
     >
      <WellnessModalReadOnly />
      <WellnessModal />

    </div>
  );
}

export default App;
