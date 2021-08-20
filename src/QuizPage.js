import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



class QuizPage extends React.Component{

  constructor(props){
    super(props)
    this.questions = ["what is 2 + 2 ?", "Which one is A ?"]
    this.answers = [["5","6", "9", "4"],["A","B", "C", "D"]]
    this.id = 1;
  }

  render(){
    return(
      <div>
      <p>
        {this.questions[this.id]}
      </p>
      <div align="center">
        {
          this.answers[this.id].map((answer) => 
          <Button className="videoPageButton" variant="warning" align="right"> {answer} </Button>) 
        }
      </div>
    </div>
    )
  }

  
}

export default QuizPage;
