import React from 'react';
import styled from 'styled-components';

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7)); 
  backdrop-filter: blur(5px); 
  z-index: 3;
`;

const Backdrop = ({ onClick }) => {
  return <BackdropStyle onClick={onClick} />;
};

export default Backdrop;