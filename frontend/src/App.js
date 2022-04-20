import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUsername] = useState('')

  useEffect(() => {
    blankRoute()
  }, [])

  const blankRoute = async () => {
    const response = await axios.get('/blank');
    console.log(response);

  }

  return (
    <h1>Front End</h1>
  );
}

export default App;
