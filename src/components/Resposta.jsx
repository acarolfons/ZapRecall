import React from "react";
import styled from "styled-components";

export default function Resposta({
  resposta,
  onNaoLembrei,
  onQuaseLembrei,
  onZap,
}) {
  return (
    <CardResposta className="card-resposta">
      <p>{resposta}</p>
      <BotoesResposta>
        <Botao className="vermelho" onClick={onNaoLembrei}>
          Não lembrei
        </Botao>
        <Botao className="laranja" onClick={onQuaseLembrei}>
          Quase não lembrei
        </Botao>
        <Botao className="verde" onClick={onZap}>
          ZAP!!
        </Botao>
      </BotoesResposta>
    </CardResposta>
  );
}

const CardResposta = styled.div`
  display: block;
  background-color: #ffffd4;
  height: 131px;
  padding: 5px;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
`;

const BotoesResposta = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Botao = styled.button`
  cursor: pointer;
  border: none;
  width: 95px;
  height: 40px;
  border-radius: 5px;
  color: white;

  &.vermelho {
    background-color: #f93031;
  }

  &.laranja {
    background-color: #fb922e;
  }

  &.verde {
    background-color: #33be34;
  }

  &.vermelho:hover {
    background-color: #ec5858;
  }

  &.laranja:hover {
    background-color: #dba46c;
  }

  &.verde:hover {
    background-color: #00ff0d;
  }
`;