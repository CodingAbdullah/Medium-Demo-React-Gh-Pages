import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar/Navbar';
import LoginFormPage from './Components/LoginFormPage/LoginFormPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Page404 from './Components/Page404/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path="/Demo10_React_JS_GitHub_Pages/" element={<App />}></Route>
        <Route exact path="/Demo10_React_JS_GitHub_Pages/#/login" element={<LoginFormPage />}></Route>
        <Route exact path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
