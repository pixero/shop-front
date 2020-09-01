import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ContainerHeader} from "./components/header/ContainerHeader";
import {ContainerMainPage} from "./page/mainPage/ContainerMainPage";
import {Col, Container, Row} from "react-bootstrap";
import {ContainerFooter} from "./components/footer/ContainerFooter";
import {ContainerYandexMap} from "./components/yandexMap/ContainerYandexMap";

function App() {
  return (
          <Container>
              <Row>
                  <Col><ContainerHeader/></Col>
              </Row>
                <ContainerMainPage/>
                <ContainerYandexMap/>

                <ContainerFooter/>
          </Container>

  );
}

export default App;
