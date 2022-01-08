import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import WellnessQuestions from './wellnessCard'
import Container from 'react-bootstrap/Container'
import {createSlice} from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'







function WellnessModal() {
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);
    console.log(show)
    console.log(showButton)

    const handleButtonShow = () => {
        
        if (showButton === false && show === false) {
            setShowButton(false)
            setShow(true)
        } return
    }

    return (
        <>
            <Container >
                {showButton === false ? (<Button variant="primary" onClick={() => handleButtonShow()} >  Wellness Questions
                </Button>) : null
                }

            </Container>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <WellnessQuestions />
                </Modal.Body>
            </Modal>
        </>
    );
}


export default WellnessModal;