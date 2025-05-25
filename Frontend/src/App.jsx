import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fa0 } from "react-icons/fa6";
import MainPage from './pages/MainPage';

function App() {
  // Start web we will set isLogin to be false for check user have to login first before use
  // functions:
  // - Add a comment
  // - Add a food post
  // - Add a image
  localStorage.setItem("isLogin", false);

  return (
    <>
      <MainPage></MainPage>
    </>
  )
}

export default App
