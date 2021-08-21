import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
// Note Need To Fix How Button Changes Between Questions (Key within Map Function might be the answer)
class QuizPage extends React.Component {

  constructor(props) {
    super(props)
    this.question = []
    this.questionsTest = ["what is 2 + 2 ?", "Which one is A ?"]
    this.questionAnswers = [["5", "6", "9", "4"], ["A", "B", "C", "D"]]
    this.correctAnswer = ["4", "A"]
    this.id = 0
    //this.id = this.props.match.params.id
    this.increment = this.increment.bind(this)
    this.state = {
      showPopUp: false
    }
    this.handleClose = this.handleClose.bind(this)
  }

  // const [show, setShow] = useState(false);
  //  handleClose = () => setShow(false);
  //  handleShow = () => setShow(true);


  increment(event) {

    const buttonKeyId = event.target.getAttribute("button-id")
    if (this.questionAnswers[this.id][buttonKeyId] == this.correctAnswer[this.id]) {
      if (this.id < this.questionAnswers.length - 1) {
        this.id += 1;
      }
      else {
        this.id = 0;
        //this.props.history.push("/quiz/" + this.linkId + "/video")
      }
    }
    else {
      this.setState({
        showPopUp: true
      })
    }
    this.forceUpdate();
  }

  handleClose() {
    this.setState({
      showPopUp: false
    })
  }

  render() {
    return (
      <div>
        <Image src={this.question[this.id]} fluid />

        <p>
          {this.questionsTest[this.id]}
        </p>
        <div align="center">
          {
            this.questionAnswers[this.id].map((answer, index) =>
              <Button className="videoPageButton" variant="warning" align="right" onClick={this.increment} button-id={index}> {answer} </Button>)
          }
        </div>

        <Modal show={this.state.showPopUp} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }


}

export default QuizPage;
