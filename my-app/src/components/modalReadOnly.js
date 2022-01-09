import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from "react-redux";
import { questions } from '../reducers/questions';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { WellnessCard } from './wellnessCard'
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import moment from 'moment'
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
                <Modal.Body style={{ marginLeft: "20px", marginTop: "20px", marginBottom: '20px' }}>
                    <Col>
                        <Row className="questionCard" style={{ border: '1px solid black', width: '100%', padding: '10px' }}>
                            {currentQuestionnaire.questions.map((question, index) =>
                                <WellnessCard key={question.id} question={question} answer={currentQuestionnaire.answers[index]} />)}
                        </Row>
                    </Col>
                </Modal.Body>
            </Modal>
            <Navbar expand="lg" variant="light" bg="light" style={{ border: '1px solid black', cursor: 'initial' }}>
                <Container >
                    <Navbar.Brand href="#" style={{ borderRadius: '3px' }}>How are you feeling today ?</Navbar.Brand>
                </Container>
            </Navbar>
            <Container style={{ border: '1px solid black' }}>
                <Table striped bordered hover style={{ marginTop: '15px' }}>
                    <thead>
                        <tr>
                            <th>Questionnaire</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionnaires.map((questionnaire) => (
                            <tr key={questionnaire.id}>
                                <td><span style={{ cursor: 'pointer', borderRadius: '2px', }} onClick={() => presentReadOnly(questionnaire)}>{questionnaire.id}</span></td>
                                {/* moment requires an object */}
                                <td>{moment(new Date(questionnaire.timestamp)).fromNow()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Container>

        </>
    );
}


export default WellnessModalReadOnly;