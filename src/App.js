import './App.scss';
import * as React from 'react';
import { BrowserRouter, Routes, Navigate, Route} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import Navbar from './CommonComponents/js/Navbar'
import Account from './AccountPage/Account';
import { useCookies } from 'react-cookie'
import HomePage from './HomePage/HomePage';
import SearchResults from './SearchResultsPage/SearchResultsPage';
import ConsultantAccountPage from './ConsultantAccountPage/ConsultantAccountPage';
import VideoCallPage from './VideoCallPage/VideoCallPage';


function App() {

  const [cookies, setCookie] = useCookies(['access_token'])

  function hasJWT() {
    let flag = false;
    //check user has JWT token
    if(cookies.danistir_access_token){
      flag = true
    } else{

        flag = false;
    }
   
    return flag
}


  return (
    <div className="App">
      <Navbar hasJWT={hasJWT}/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} /> 
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/account" element={hasJWT() ?  <Account /> : <Navigate to="/login" />} /> 
          <Route exact path="/search_results" element={<SearchResults />} /> 
          <Route exact path="/account_c" element={hasJWT() ?  <ConsultantAccountPage/> : <Navigate to="/login" />}/>
          <Route exact path="/video" element={<VideoCallPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
