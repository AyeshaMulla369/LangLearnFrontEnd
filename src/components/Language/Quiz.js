import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './QuizCard.css'
import { useAuth } from '../../context/AuthContext';

function Quiz() {
  const [quizData, setLevelsData] = useState([]);
  const { isAuthenticated, user, login, logout } = useAuth();
  let newScore = 0;

  const { lang, level } = useParams();
  


  const handlescore = async () => {
    const putscore = newScore>score? newScore : score;
    console.log(user, lang, putscore)
    const username = user.username
    try {
      await axios.post(`http://192.168.29.190:8000/postScore`, { username, lang, putscore })
        .then((response) => {
          alert("Score updated");
        });
  
    } catch (error) {
      console.error('Error posting score:', error);
    }
  }
  


  console.log(lang)
  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.29.190:8000/quiz-of-level/${lang}`,{
          params:{
            level: level
          }
        });
        console.log(response.data);
        setLevelsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lang, level]);



  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const calculateScore = () => {
    quizData.forEach((question) => {
      if (userAnswers[question._id] === question.isAnswer) {
        newScore += question.score;
      }
    });
    setScore(newScore);
    handlescore();
  };

  return (
    <div className="quiz-container">
      {quizData.map((question) => (
        <div key={question._id} className="quiz-card">
          <p className="question-text">{question.question}</p>
          <div className="option-container">
            {question.options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  id={`${question._id}-${index}`}
                  name={question._id}
                  value={index}
                  checked={userAnswers[question._id] === index}
                  onChange={() => handleOptionChange(question._id, index)}
                />
                <label htmlFor={`${question._id}-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={calculateScore}>Submit</button>
      {score !== null && <p>Your Score: {score}</p>}
    </div>
  );


}

export default Quiz