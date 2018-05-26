import React, { Component } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import mobileFrame from '../assets/icons/mobile-frame.svg';
import desktopFrame from '../assets/icons/desktop-frame.svg';
import rdD from '../assets/images/portfolio/rd-d.jpg';
import rdM from '../assets/images/portfolio/rd-m.jpg';
import peloD from '../assets/images/portfolio/pelo-d.jpg';
import peloM from '../assets/images/portfolio/pelo-m1.jpg';
import bcD from '../assets/images/portfolio/bc-d.jpg';
import bcM from '../assets/images/portfolio/bc-m.jpg';
import pamD from '../assets/images/portfolio/pam-d.jpg';
import pamM from '../assets/images/portfolio/pam-m.jpg';
import suD from '../assets/images/portfolio/su-d.jpg';
import suM from '../assets/images/portfolio/su-m.jpg';

const Section = styled.section`
  color: ${props => props.theme.fontColor}
`
const Frame = styled.div`
  & path {
    fill: #fff;
  }
`

function Sshot(props) {
  const frame = (props.viewport === "mobile") ? (
    <SVG src={mobileFrame} alt="" />
  ) : (
    <SVG src={desktopFrame} alt="" />
  )

  return (
    <div className="screenshot">
      <Frame className="frame">
        {frame}
      </Frame>
      <img src={props.img} alt="" />
    </div>
  )
}
function Project(props) {
  const project = props;
  return(
    <div className ="project">
      <h3>{project.name}</h3>
      <div className ="gallery">
        {project.children}
      </div>
      <div className ="tools">
        {project.tools && project.tools.map(function(tool, i){
          return <span className ={tool} data-index={i}></span>
        })}
      </div>
    </div>
  )
}

class Portfolio extends Component {
  render(){
    return (
      <Section className="container">
        <h1>Portafolio</h1>
        <Project name="Remix Design">
          <Sshot img={rdD} viewport="desktop" alt="" />
          <Sshot img={rdM} viewport="mobile" alt="" />
        </Project>
        <Project name="Pélo">
          <Sshot img={peloD} viewport="desktop" alt="" />
          <Sshot img={peloM} viewport="mobile" alt="" />
        </Project>
        <Project name="BC">
          <Sshot img={bcD} viewport="desktop" alt="" />
          <Sshot img={bcM} viewport="mobile" alt="" />
        </Project>
        <Project name="Project American Dreams">
          <Sshot img={pamD} viewport="desktop" alt="" />
          <Sshot img={pamM} viewport="mobile" alt="" />
        </Project>
        <Project name="Step Up">
          <Sshot img={suD} viewport="desktop" alt="" />
          <Sshot img={suM} viewport="mobile" alt="" />
        </Project>
      </Section>
    )
  };
}

export default Portfolio;

