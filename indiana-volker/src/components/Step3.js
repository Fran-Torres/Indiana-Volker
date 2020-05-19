import React from 'react';
import '../Pages/Home.css';
import { Link } from 'react-router-dom';

export default function step2() {
    return (
        <div className="contenedor">
            <img src="/assets/IV - McCarthys.jpg" alt="Foto de portada del albúm Balanza 2" />
            <Link to="/McCarthys" id="Taylor"><strong>McCarthys</strong></Link>
        </div>
    )
}
