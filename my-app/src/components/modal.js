import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { useState } from 'react'
import WellnessQuestions from './wellnessCard'
import Container from 'react-bootstrap/Container'
import { useDispatch } from "react-redux";
import { questions } from '../reducers/questions';


const WellnessModal = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const startQuestions = () => {
        setShow(true);
        // takes in the questions reducer and uses the start function in the actions
        dispatch(questions.actions.start());
    }
    return (
        <>
            <Container style={{marginTop: '10px'}} >
                <Row>
                    <Button variant="primary" onClick={startQuestions} >  Begin Wellness Questions</Button>
                </Row>

            </Container>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body style={{marginLeft: "20px", marginTop: "20px", marginBottom: '20px'}}>
                    <WellnessQuestions onSubmit={() => setShow(false)} />
                </Modal.Body>
            </Modal>
        </>
    );
}


export default WellnessModal;