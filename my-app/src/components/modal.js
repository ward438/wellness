import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import WellnessQuestions from './wellnessCard'
import Container from 'react-bootstrap/Container'
import { useDispatch } from "react-redux";
import { questions } from '../reducers/questions';


const WellnessModal = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const startQuestions = ()=>{
        setShow(true);
        // takes in the questions reducer and uses the start function in the actions
        dispatch(questions.actions.start());
    }
    return (
        <>
            <Container >
                <Button variant="primary" onClick={startQuestions} >  Wellness Questions</Button>
            </Container>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <WellnessQuestions onSubmit={()=>setShow(false)}/>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default WellnessModal;