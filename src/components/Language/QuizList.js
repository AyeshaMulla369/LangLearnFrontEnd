import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizListItem from './QuizListItem';
import { useParams } from 'react-router-dom';


const QuizList = () => {
  const [levelsData, setLevelsData] = useState([]);

  const { lang } = useParams();
  console.log(lang)
  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.29.190:8000/get-levels-list/${lang}`);
        console.log(response.data);
        setLevelsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lang]); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1 style={{marginTop: '30px'}}>{lang}</h1>
      {levelsData.map((level, index) => (
        <QuizListItem key={index} level={level} lang={lang} />
      ))}
    </div>
  );
};

export default QuizList;
