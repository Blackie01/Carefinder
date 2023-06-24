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

    console.log(SearchInput)
    console.log(SearchInput)
  }

  // function to set the value gotten into state manager for the api link
  const fixInput = (e) => {
    setSearchInput(e.target.value)

    setUserInput(SearchInput)
    console.log(UserInput)
  }

  // state management and function to get user location (latitude and longitude)
  const [UserLocation, setUserLocation] = useState (null)

  useEffect (() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        console.log('Error occurred while getting user location:', error);
      }
    );
  }, [UserInput])

  // API call with useEffect 
  useEffect(() => {

    // Create an AbortController instance
  const abortController = new AbortController();


    const fetchData = async () => {
      try {

        if (!UserLocation) {
          console.log('User location not available');
          return;
        }
        const {latitude, longitude } = UserLocation;
        console.log( latitude + longitude)
        const query = encodeURIComponent(UserInput);
        const response = await fetch (
          `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCBOdCT_ro5ygGcNJv5PH2mHgPoJb1tMQ4&radius=500000&location=${latitude},${longitude}&type=hospital&origin=http://localhost:3000&query=${query}`
          )
        const responseData = await response.json()
        // setData(responseData)
        // console.log(Data)

        if (responseData.status === 'OK') {
          setData(responseData.results);
          console.log(Data)
        } else {
          console.log('Error occurred:', responseData.status);
        }
      } catch (error) {
        console.error ('Error:', error)
      }
    } 
fetchData()
  //     Cleanup function
  return () => {
    // Cancel the ongoing request by aborting it
    abortController.abort();
  };

  }, [SearchInput, UserLocation])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home  getInput = {getInput} fixInput = {fixInput}/>}/>
        <Route path='/Hospitals' element={<Hospitals/>}/>

      </Routes>
    </div>
  );
}

export default App;
