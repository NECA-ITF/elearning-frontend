import React from 'react';
import CustomButton from './components/customButton/CustomButton';
import CustomInput from './components/customInput/CustomInput';
import HomePage from './pages/homePage/HomePage';
import './App.css';

function App() {
  return (
    <div>
        <HomePage/>
        <CustomButton/>
        <CustomInput/>
    </div>
  )
}

export default App;