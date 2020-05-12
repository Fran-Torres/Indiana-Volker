import React from 'react';
import './LatestNews.css';

function latestNews(){
  return (
    <>
       <h1><strong>Últimos Lanzamientos</strong></h1>
       <section class="reciente">
          <div class="contenedor">
             <img src="/assets/Balanza 1_upload.jpg" alt="Foto de portada del albúm Balanza 1" />
             <p><strong>Ir al albúm</strong></p>
          </div>
          <div class="contenedor">
             <img src="/assets/Balanza 2_upload.jpg" alt="Foto de portada del albúm Balanza 2" />
             <p><strong>Ir al albúm</strong></p>
          </div>
          <div class="contenedor">
             <img src="/assets/IV - McCarthys (14 of 38).jpg" alt="Foto de toquin en bar McCarthys" />
             <p><strong>McCarthys</strong></p>
          </div>
       </section>
    </>
  );
};

export default latestNews;