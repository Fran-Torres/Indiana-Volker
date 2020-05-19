import React from 'react';
import './Home.css';
import { Row, Col } from 'reactstrap'
import fluid from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import {Route, Switch} from 'react-router-dom';

function Home() {
   return (
      <>
         <div className="bannerselector" id="main-banner" >
            <img className="banner" alt="banner" src="./assets/Indiana Volker v2.jpg" fluid />
         </div>
         <h1><strong>Últimos Lanzamientos</strong></h1>
         <section className="reciente">
       
            <Row>
               <Col>
                  <Step1 />
               </Col>
               <Col>
                  <Step2 />
               </Col>
               <Col>
                  <Step3 />
               </Col>
            </Row>
         </section>
      </>
   );
};

export default Home;