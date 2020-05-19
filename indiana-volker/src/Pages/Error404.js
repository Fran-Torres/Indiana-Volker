import React from 'react';
import './Error404.css';
import { Row, Col } from 'reactstrap';

const NotFound = () =>
    <>
        <Row>
            <Col>
                <div>
                    <h3>404 page not found</h3>
                    <p>We are sorry but the page you are looking for does not exist.</p>
                </div>
            </Col>
        </Row>
    </>

export default NotFound