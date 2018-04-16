import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class About extends Component {
  render(){
    return (
      <div className="container">
        <h1>Acerca de mí</h1>
        <p>
          <strong>La versión corta</strong>: Soy Santiago Restrepo, desarrollador web 
          con énfasis en frontend. Tengo amplia experiencia en 
          HTML, CSS, Javascript y he trabajado con una amplio abanico
          de frameworks sobre estos, entre ellos SASS, BackboneJS y 
          más recientemente me he enfocado en React.
        </p>
        <p>
          Tengo experiencia en backend también, en particual sobre PHP y Wordpress, 
          plataformas en las cuales me desenvuelvo con fluides.
        </p>
        <p>
          Finalmente estoy familiarizado con marcos de trabajo colaborativo 
          como SCRUM y Kanban. También manejo cómodamente el sistema de repositorio
          git.
        </p>
      </div>
    )
  };
}

export default About;

