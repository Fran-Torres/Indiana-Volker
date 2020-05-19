import React from 'react';
import '../Pages/Home.css';
import { Link } from 'react-router-dom';


export default function step1() {
    return (
        <div className="contenedor">
            <img src="/assets/Balanza 1_upload.jpg" alt="Foto de portada del albúm Balanza 1" />
            <Link to= "/Balanza1" id="Berni"><strong>Ir al Álbum</strong></Link>
        </div>
    )
}
