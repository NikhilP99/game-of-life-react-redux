import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Board from './components/Board'
import Generation from './components/Generation'

class App extends Component {
  render(){
    return (
     <Container>
       <Row style={{marginBottom: "20px", marginTop:"50px"}}>
         <Col ></Col>
         <Col xs={6} className="heading">
           <h1>Conway's Game of Life</h1>
         </Col>
         <Col ></Col>
       </Row>
       <Row className="center">
         <Generation />
       </Row>
       <Row className="center">
         <Board />
       </Row>
     </Container>
    );
  }
}

export default App;
