import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Quiz from './components/Language/Quiz';
import QuizList from './components/Language/QuizList';
import Leaderscore from './components/User/Leaderscore';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Login' exact Component={Login}/>
          <Route path='/Signup' exact Component={Signup}/>
          <Route path='/QuizList/:lang' exact Component={QuizList}/>
          <Route path='/Quiz/:lang/:level' exact Component={Quiz}/>
          <Route path='Leaderscore' exact Component={Leaderscore}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
