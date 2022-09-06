import React from 'react';
// import CustomButton from './components/customButton/CustomButton';
// import CustomInput from './components/customInput/CustomInput';

import HomePage from './pages/homePage/HomePage';
import './App.css';
import NavBar from './pages/homePage/NavBar';


function App() {
  return (
    <div>
        <NavBar/>
        <HomePage/>
        {/* <CustomButton/> */}
        {/* <CustomInput/> */}
    </div>
  )
}

export default App;