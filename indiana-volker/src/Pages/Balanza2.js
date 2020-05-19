import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { Redirect, Link, Router, Route } from 'react-router-dom';
import './Estilos-albumes.css';
import { Row, Col } from 'reactstrap';
import Playlist2 from '../components/Playlist2.js';


export default function Balanza2() {
    return (
        <>
            <Row>
                <Col>
                    <div className="Balanza2estilos">
                        <Playlist2 />
                    </div>
                </Col>
            </Row>
        </>
    )
}
