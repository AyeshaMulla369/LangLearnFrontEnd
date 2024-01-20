import React from 'react'; 
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom'; 
import './QuizList.css'
 
function QuizListItem(props) { 
  return ( 
    <div className="card">
      <h1>Level {props.level}</h1>
      <div>
      This is a quiz of the given level. Each question has certain marks and is given beside. This will affect your overall rank. 
      </div>
      <Link to={{pathname:`/Quiz/${props.lang}/${props.level}`}}>
            <Button variant="primary">Attempt Quiz</Button> 
          </Link> 
    </div>
  ); 
} 
 
export default QuizListItem;