import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './lb.css';
import Profile from './Profile';

function Leaderscore() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language

  const fetchLeaderboardData = async (lang) => {
    try {
      const response = await axios.get(`http://192.168.29.190:8000/leaderboard/${lang}`);
      console.log(response.data);
      setLeaderboardData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboardData(selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
    <div className="card">
      <h1>LeaderBoard</h1>
      <div className="language-selector">
        <label htmlFor="language">Select Language:</label>
        <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="French">French</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item) => (
            <tr key={item._id}>
              <td>{item.username}</td>
              <td>{item.score[selectedLanguage]}</td>
              {/* Add more columns if you have scores in other subjects */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
}

export default Leaderscore;
