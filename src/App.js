import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ContainerHeader} from "./components/header/ContainerHeader";
import {ContainerMainPage} from "./page/mainPage/ContainerMainPage";
import {Col, Container, Row} from "react-bootstrap";

function App() {
  return (
          <Container>
              <Row>
                  <Col><ContainerHeader/></Col>
              </Row>
            <Row className="mainContent">
                <Col><ContainerMainPage/></Col>
            </Row>
          </Container>

  );
}

export default App;
