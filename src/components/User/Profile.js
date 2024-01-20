import React, {useState, useEffect} from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

function Profile() {

    const [userData, setUserData] = useState([]);
    const { isAuthenticated, user, login, logout } = useAuth();

    useEffect(() => {
        fetchUserData();
      }, []);

      
      const fetchUserData = async (lang) => {
        try {
            console.log(user)
          const response = await axios.get(`http://192.168.29.190:8000/profile/${user}`);
          console.log(response.data);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
    const { username, name, score } = userData;


    return (
        <div className="cardProf">
          <h1>Profile</h1>
          <div>
            <strong>Username:</strong> {username}
          </div>
          <div>
            <strong>Name:</strong> {name}
          </div>
          <div>
            <h2>Scores:</h2>
            <ul>
              {Object.entries(score).map(([subject, value]) => (
                <li key={subject}>
                  <strong>{subject}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default Profile