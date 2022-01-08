import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from "react-redux";
import { questions } from '../reducers/questions';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {WellnessCard} from './wellnessCard'

const WellnessModalReadOnly = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const questionnaires = useSelector((state) => state.questions.allQuestionnaires.questionnaires)
    
    const currentQuestionnaire = useSelector((state) => state.questions.value);

    const presentReadOnly = (questionnaire) => {
        dispatch(questions.actions.setReadOnly(questionnaire));
        setShow(true)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <Col>
                        <Row className="questionCard" style={{ border: '1px solid black', width: '100%', padding: '10px' }}>
                            {currentQuestionnaire.questions.map((question, index) =>
                                <WellnessCard key={question.id} question={question} answer={currentQuestionnaire.answers[index]}/>)}
                        </Row>
                    </Col>
                </Modal.Body>
            </Modal>
            {questionnaires.map((questionnaire) => (<div key={questionnaire.id}>
                <a onClick={() => presentReadOnly(questionnaire)}>{questionnaire.id}</a>
            </div>))}
        </>
    );
}


export default WellnessModalReadOnly;