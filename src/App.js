import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/homepage';
import Hospitals from './components/Hospitals';
import { Route, Routes } from "react-router-dom"

function App() {
  
  // state management of the value from the input field. 
  const [SearchInput, setSearchInput] = useState('')

  // state management to transfer the value gotten into API fetch link
  const [UserInput, setUserInput] = useState('')

  // state management for the list of hospitals returned by API
  const [Data, setData] = useState('')

  // function to get the value in the input field and apply to state
  const getInput = (e) => {
    setSearchInput(e.target.value)
    console.log(SearchInput)
  }

  // function to set the value gotten into state manager for the api link
  const fixInput = () => {
    setUserInput(SearchInput)
    console.log(UserInput)
  }

  // API call with useEffect 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = encodeURIComponent(UserInput);
        const response = await fetch (
          `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCBOdCT_ro5ygGcNJv5PH2mHgPoJb1tMQ4&radius=500000&type=hospital&origin=http://localhost:3000&query=${query}`
          )
        const responseData = await response.json()
        setData(responseData)
        console.log(Data)
      } catch (error) {
        console.error ('Error:', error)
      }
    } 

    fetchData()
  }, [SearchInput])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home getInput = {getInput} fixInput = {fixInput}/>}/>
        <Route path='/Hospitals' element={<Hospitals/>}/>

      </Routes>
    </div>
  );
}

export default App;
