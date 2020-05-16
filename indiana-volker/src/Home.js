import React from 'react';
import './Home.css';
import fluid from "react-bootstrap";
import Image from 'react-bootstrap/Image';

function Home(){
  return (
    <>
       <div className="bannerselector" id="main-banner" >
            <img className="banner" alt="banner" src="./assets/Indiana Volker v2.jpg" fluid />
          </div>
       <h1><strong>Últimos Lanzamientos</strong></h1>
       <section className="reciente">
          <div className="contenedor">
             <img src="/assets/Balanza 1_upload.jpg" alt="Foto de portada del albúm Balanza 1" />
               <a className="news-link">Ir al Álbum</a>
          </div>
          <div className="contenedor">
             <img src="/assets/Balanza 2_upload.jpg" alt="Foto de portada del albúm Balanza 2" />
             <a className="news-link">Ir al Álbum</a>
          </div>
          <div className="contenedor">
             <img src="/assets/IV - McCarthys (14 of 38).jpg" alt="Foto de toquin en bar McCarthys" />
             <a className="news-link">McCarthys</a>
          </div>
       </section>
    </>
  );
};

export default Home;