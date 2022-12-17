import logo from '../logo.svg';
import '../App.css';
import load from '../asset/1_DXvI3dy2rKOMzV8S3fKFMQ.gif';
import React , { useState, useEffect } from 'react';
// import loadingScreen from './loading';
import Formulario from './formulario';
import LoadingScreen from 'react-loading-screen';
function App() {
  const [loading, setLoading] = useState(false);
  let loadin = true;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  const endTime = ()=>{
   
    return false;
  }
  // useEffect(() => {
  const time =  setTimeout(endTime, 1000);
  // });

  return (
    <>
    <LoadingScreen loading={loading}
      bgColor='#fff'
      spinnerColor='#9ee5f8'
      textColor='#676767'
      logoSrc={load}
      ></LoadingScreen> 
    <div className="App">
      <Formulario></Formulario>
      </div>
    </>
  );
}

export default App;
