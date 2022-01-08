import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux';
import questionAssets from '../assets/questions';
import { questions } from '../reducers/questions';

export const WellnessCard = ({ question, onChange, answer }) => {
    return <Card className="text-center" >
        <Card.Body>
            <Card.Text>
                {question.question}                   
            </Card.Text>
            {onChange !== undefined && <Form.Control size="lg" type="text" placeholder="Large text" onChange={(e)=>onChange(e.target.value)}/>}            
            {answer !== undefined && <Form.Control size="lg" type="text" placeholder="Large text" value={answer} readOnly={true}/>}            
        </Card.Body>
    </Card>
}

const WellnessQuestions = ({onSubmit}) => {
    const dispatch = useDispatch();
    const [answers, setAnswers] = useState(useSelector((state) => state.questions.value.answers));

    const saveAnswers = ()=>{        
        dispatch(questions.actions.save(answers));        
        onSubmit();
    }

    const updateAnswer = (index, value) =>{
        let answersCopy = [...answers]
        answersCopy[index] = value;
        setAnswers(answersCopy)
    }
    

    return <Col>
        <Row className="questionCard" style={{ border: '1px solid black', width: '100%', padding: '10px' }}>
            {questionAssets.map((question, index) => <WellnessCard key={question.id} onChange={(answer)=>{updateAnswer(index, answer)}} header={question.boolean} question={question} button={'button'} date={'date'} readOnly={'readOnly'} />)}
            <Col>
                <Container style={{ display: 'flex', justifyContent: 'center', }}>
                    <Button variant="primary" style={{ width: '20em' }} onClick={()=>{saveAnswers()}}>Submit</Button>
                </Container>
            </Col>
        </Row>
    </Col>
}



export default WellnessQuestions;