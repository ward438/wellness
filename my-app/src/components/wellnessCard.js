import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import questions from '../assets/questions'

const WellnessQuestions = () => {


    const WellnessCard = ({header, title, question, button, date, readOnly = false}) => {
       
        return <Card className="text-center">
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    {questions.question}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>

    }

    return <>
           {questions.map((question)=><WellnessCard key={question.id} header={question.boolean}/>)}
        </>

  
}



export default WellnessQuestions;