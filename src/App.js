import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Board from './components/Board'
import Generation from './components/Generation'
import Controls from './components/Controls'

class App extends Component {
  render(){
    return (
     <Container>
       <Row style={{marginBottom: "20px", marginTop:"30px"}}>
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
       <Row className="center" style={{marginTop:"20px"}}>
         <Controls />
       </Row>
     </Container>
    );
  }
}

export default App;
