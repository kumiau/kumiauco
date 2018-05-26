import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  color: ${props => props.theme.fontColor}
`

class About extends Component {
  render(){
    return (
      <Section className="container">
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
          como SCRUM y Kanban. También trabajo cómodamente sobre el sistema de 
          repositorio git.
        </p>
        <p>
          <strong>La versión larga</strong>: Oriundo de Pereira, Colombia pero actualmente
          vivo en Bogotá. Estudié Ingeniería en Sistemas en la Universidad Tecnológica
          de Pereira y desde la Universidad trabajo con tecnologías web. 
        </p>
        <p>
          En Pereira fundé junto al diseñador Jorge Grajales el emprendimiento 
          <strong>Activo Multimedia</strong> en el marco de cluster de tecnología
          Parquesoft. desde el año 2006 hasta el 2008 hasta el 2013 enfocados en desarrollo 
          de aplicativos web y multimedia.  Trabajé con un talentoso equipo lo que me 
          dejó con muchas experiencias sobre diseño, accesibilidad y experiencia de usuario
          además de cómo coordinar equipos y dirigir gestión de proyectos.
        </p>
        <p>
          En el 2009 me vinculé a la agencia <a href="http://brandca.co">Brandca</a> donde
          fui desarrollador lider y trabajamos en desarrollos de multiples sitios
          comerciales enfocados en la plataforma Wordpress. A partir de ese momento
          he trabajado de manera independiente como Freelance con la agencia
          <a href="http://cien.plus">Cien +</a>.
        </p>
      </Section>
    )
  };
}

export default About;

