import './App.css';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "./image/image1.jpeg"
import image2 from "./image/image2.jpg"
import image3 from "./image/image3.jpg"

function HomePage() {
  return (
    <div>
      <div className="Test" align="center">
        <Container fluid>
          <Row>
            <Col><iframe width="560" height="315" src="https://www.youtube.com/embed/MmB9b5njVbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
          </Row>
        </Container>
      </div>
      <div className="Test" align="center">
        <Container fluid>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="homeCarousel"
                    src={image1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="homeCarousel"
                    src={image2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="homeCarousel"
                    src={image3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <Nav
        className="bottomNav"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"> Project Information For Teachers/Parents</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Where Is Our Information From ?</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

  );
}

export default HomePage;
