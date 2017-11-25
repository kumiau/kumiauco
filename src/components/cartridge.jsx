import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.svg`
  width: 36vw;
  height: 40vw;
`;

class Cartridge extends Component {
  render() {
    return (
      <div className="cartridge"> 
        <Container>
          <g fill="#797979"> /* silhouette */
            <rect x="5%" y="0" width="90%" height="100%"  /> 
            <rect x="0" y="0" rx="3" ry="3" width="100%" height="80%" />
          </g>
          <g fill="#5b5b5b"> /* tabs */
            <rect x="3%" y="0" width="7%" height="1.5%" ></rect>
            <rect x="90%" y="0" width="7%" height="1.5%" ></rect>
          </g>
          <g fill="#707070"> /* stripe */
            <rect height="100%" width="22%" x="15.5%" ></rect>
          </g>
          <g> /* label */
            <rect height="68%" width="47%" x="40%" y="0" fill="#000000" ></rect>
          </g>
          <g> /* triangle */
            <polygon points="46,74 55,74 50.5,81"  fill="#676767" ></polygon>
          </g>
        </Container>
      </div> 
    )
  }
}

export default Cartridge;
