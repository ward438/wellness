import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import questions from '../assets/questions'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import WellnessModal from './modal'
import 'bootstrap/dist/css/bootstrap.min.css'
const WellnessQuestions = () => {
    console.log(questions)
    const WellnessCard = ({ header, title, question, button, date, readOnly = false }) => {

        return <Card className="text-center" >
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {question.question}
                    <WellnessModal/>
                </Card.Text>
                <Form.Control size="lg" type="text" placeholder="Large text" />
            </Card.Body>
        </Card>

    }

    return <Col>
        <Row xs={1} md={2} className="questionCard" style={{ border: '1px solid black', width: '100%', padding: '10px' }}>
            {questions.map((question) => <WellnessCard key={question.id} header={question.boolean} question={question} button={'button'} date={'date'} readOnly={'readOnly'} />)}
            <Col>
                <Container style={{ display: 'flex', justifyContent: 'center', }}>
                    <Button variant="primary" style={{ width: '20em' }}>Submit</Button>
                </Container>

            </Col>

        </Row>
    </Col>




}



export default WellnessQuestions;