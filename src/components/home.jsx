import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const aitf = keyframes`
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
`

const Logo = styled.span`
  text-align: left;
	font: 700 70vw/1 "Oswald", sans-serif;
  word-break: break-all;
	letter-spacing: 0;
	display: block;
	margin: 0 auto;
  // 	text-shadow: 0 0 80px rgba(255,255,255,.5);

  /* Clip Background Image */

	background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;
	-webkit-background-clip: text;
	background-clip: text;

  /* Animate Background Image */

	-webkit-text-fill-color: transparent;
	-webkit-animation: ${aitf} 80s linear infinite;

  /* Activate hardware acceleration for smoother animations */

	-webkit-transform: translate3d(0,0,0);
	-webkit-backface-visibility: hidden;
`

class Home extends Component {
  render(){
    return (
      <div className="container">
        <p>
          <Logo>KUMIAU</Logo>
        </p>
      </div>
    )
  };
}

export default Home;

