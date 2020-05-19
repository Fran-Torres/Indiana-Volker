import React from 'react';
import '../Pages/Home.css';
import { Link } from 'react-router-dom';

export default function step2() {
    return (
        <div className="contenedor">
            <img src="/assets/Balanza 2_upload.jpg" alt="Foto de portada del albúm Balanza 2" />
            <Link to="/Balanza2" id="Taylor"><strong>Ir al Álbum</strong></Link>
        </div>
    )
}
