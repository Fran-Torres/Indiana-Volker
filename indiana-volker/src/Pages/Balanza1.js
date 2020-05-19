import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { Redirect, Link, Router, Route } from 'react-router-dom';
import './Estilos-albumes.css';
import { Row, Col } from 'reactstrap';
import Playlist1 from '../components/Playlist1';


export default function Balanza1() {
    return (
        <>
            <Row>
                <Col>
                    <div className="Balanza1estilos">
                        <Playlist1 />
                    </div>
                </Col>
            </Row>
        </>
    )
}
