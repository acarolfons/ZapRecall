import React from "react";
import logo from "./assets/logo.png";
import Cartas from "./components/Cartas";
import Footer from "./components/Footer";
import styled from "styled-components";

export default function App() {
  const CARTAS = [
    {
      pergunta: "Pergunta 1",
      questao: "O que é JSX?",
      resposta: "Uma extensão da linguagem JavaScript",
    },
    {
      pergunta: "Pergunta 2",
      questao: "O React é __",
      resposta: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      pergunta: "Pergunta 3",
      questao: "Componentes devem iniciar com __",
      resposta: "Letra maiúscula",
    },
    {
      pergunta: "Pergunta 4",
      questao: "Podemos colocar __ dentro do JSX",
      resposta: "expressões",
    },
    {
      pergunta: "Pergunta 5",
      questao: "O ReactDOM nos ajuda __",
      resposta: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      pergunta: "Pergunta 6",
      questao: "Usamos o npm para __",
      resposta: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      pergunta: "Pergunta 7",
      questao: "Usamos props para __",
      resposta: "Passar diferentes informações para componentes",
    },
    {
      pergunta: "Pergunta 8",
      questao: "Usamos estado (state) para __",
      resposta:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const [concluidos, setConcluidos] = React.useState(0);
  const totalDeCartas = CARTAS.length;

  return (
    <AppContainer>
      <Container>
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </Container>
      <Cartas cartas={CARTAS} setConcluidos={setConcluidos} />
      <Footer texto={`${concluidos} / ${totalDeCartas} Concluídos`} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100%;
  max-width: 100%;
  background-color: #fb6b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
const Container = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  h1 {
    font-family: "Righteous", cursive;
    color: white;
    font-size: 40px;
    font-weight: 700;
  }

  img {
    height: 60px;
  }
`;
