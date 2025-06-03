import React from "react";
import styled from "styled-components";

export default function Footer({ texto }) {
  return (
    <Rodape>
      <Texto>{texto}</Texto>
    </Rodape>
  );
}

const Rodape = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Texto = styled.p`
  color: black;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
`;