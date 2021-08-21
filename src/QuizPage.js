import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'react-bootstrap/Image'

// Note Need To Fix How Button Changes Between Questions (Key within Map Function might be the answer)
class QuizPage extends React.Component{

  constructor(props){
    super(props)
    this.question = []
    this.questionsTest = ["what is 2 + 2 ?", "Which one is A ?"]
    this.questionAnswers = [["5","6", "9", "4"],["A","B", "C", "D"]]
    this.correctAnswer = ["4", "A"]
    this.id = 0;
  }

  increment(){
    if(this.answer == this.correctAnswer[this.id]){
      if(this.id < this.questionAnswers.length - 1){
        this.id += 1;
      }
      else{
        this.id = 0;
      }
    }    
    this.forceUpdate();
  }

  render(){
    return(
      <div>
        <Image src={this.question[this.id]} fluid /> 
      
      <p>
        {this.questionsTest[this.id]}
      </p>
      <div align="center">
        {
          this.questionAnswers[this.id].map((answer) => 
          <Button className="videoPageButton" variant="warning" align="right" onClick={this.increment.bind(this)}> {answer} </Button>) 
        }
      </div>
    </div>
    )
  }

  
}

export default QuizPage;
