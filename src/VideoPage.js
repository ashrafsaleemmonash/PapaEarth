import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class VideoPage extends React.Component {
  constructor(props){
    super(props)
    this.linkId = 0;
    this.links = ["https://www.youtube.com/embed/MmB9b5njVbA", "https://www.youtube.com/embed/FLTYAqpOY64"]
  }

  increment(){
    this.props.history.push("/quiz/" + this.linkId + "/video")
    if(this.linkId < this.links.length - 1){
      this.linkId += 1;
    }
    else{
      this.linkId = 0;
    }
    this.forceUpdate();
  }

  render() {
    return (<div>
      <div className="Test" align="center">
        <Container fluid>
          <Row>
            <Col><iframe width="560" height="315" src={this.links[this.linkId]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
          </Row>
        </Container>
      </div>
      <div align="right">
        <Button className="videoPageButton" variant="outline-primary" align="right" onClick={this.increment.bind(this)}> Next ! </Button>{' '}
      </div>
    </div>
    )
  }
}

export default VideoPage;
