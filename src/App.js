import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ContainerHeader} from "./components/header/ContainerHeader";
import {ContainerMainPage} from "./page/mainPage/ContainerMainPage";
import {Col, Container, Row} from "react-bootstrap";
import {ContainerFooter} from "./components/footer/ContainerFooter";

function App() {
  return (
          <Container>
              <Row>
                  <Col><ContainerHeader/></Col>
              </Row>
                <ContainerMainPage/>

                <ContainerFooter/>
          </Container>

  );
}

export default App;
