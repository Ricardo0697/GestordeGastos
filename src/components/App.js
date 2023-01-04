
import '../App.css';
import load from '../asset/1_DXvI3dy2rKOMzV8S3fKFMQ.gif';
import React , { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
// import loadingScreen from './loading';
import Formulario from './formulario';
import Login from '../components/Login';
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
  useEffect(() => {
  const time =  setTimeout(endTime, 1000);
  });

  return (
    <div className='Apps'>
    <LoadingScreen loading={loading}
      bgColor='#fff'
      spinnerColor='#9ee5f8'
      textColor='#676767'
      logoSrc={load}
      ></LoadingScreen> 
    <div className="col-md-12">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        {/* <Route path='/formulario.js'></Route> */}
        <Route path="/formulario" element={<Formulario/>}></Route>
                
      </Routes>
      </div>
    </div>
  );
}

export default App;
