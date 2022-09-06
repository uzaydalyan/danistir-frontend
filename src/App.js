import './App.scss';
import { BrowserRouter, Routes, Navigate, Route} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import Navbar from './CommonComponents/js/Navbar'
import Account from './AccountPage/Account';
import { useCookies } from 'react-cookie'
import HomePage from './HomePage/HomePage';


function App() {

  const [cookies, setCookie] = useCookies(['access_token'])

  function hasJWT() {
    let flag = false;
    //check user has JWT token
    cookies.danistir_access_token ? flag=true : flag=false
   
    return flag
}


  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={hasJWT() ?  <HomePage /> : <Navigate to="/login" />} /> 
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/account" element={hasJWT() ?  <Account /> : <Navigate to="/login" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
