import './App.css'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useEffect } from 'react';

const getResponseFromServer = async () => {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    console.log(data);
    return data;
  }
  catch(err) {
    console.log(err);
  }
}

function App() {
  useEffect(() => {
    getResponseFromServer();
  }, []);

  return (
    <>
      <Sidebar />
      <MainContent />
    </>
  )
}

export default App
