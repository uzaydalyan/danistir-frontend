import './App.scss';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/js/LoginPage';
import Navbar from './components/js/Navbar'
import Account from './pages/js/Account';
import HomePage from './pages/js/HomePage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
