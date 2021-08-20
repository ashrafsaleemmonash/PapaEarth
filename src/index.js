import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./VideoPage"
import Header from "./Header"
import QuizPage from "./QuizPage"
import HomePage from "./HomePage"
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/video" component={VideoPage} />    
        <Route path="/quiz" component={QuizPage} />      
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
