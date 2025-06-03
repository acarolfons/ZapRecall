import React from "react";
import Pergunta from "./Pergunta";
import Questao from "./Questao";
import Resposta from "./Resposta";
import styled from "styled-components";

export default function Cartas({ cartas, setConcluidos }) {
  const [estadoCarta, setEstadoCarta] = React.useState({});
  const [corResposta, setCorResposta] = React.useState({});
  const [iconeResposta, setIconeResposta] = React.useState({});
  const [respondidas, setRespondidas] = React.useState({});

  function avancar(index) {
    if (respondidas[index]) return;

    const novoEstado = { ...estadoCarta };
    novoEstado[index] = (estadoCarta[index] || 0) + 1;
    if (novoEstado[index] > 2) novoEstado[index] = 0;
    setEstadoCarta(novoEstado);
  }

  function voltarParaInicio(index, cor, icone) {
    if (respondidas[index]) return;

    const novoEstado = { ...estadoCarta };
    novoEstado[index] = 0;
    setEstadoCarta(novoEstado);

    const novaCor = { ...corResposta };
    novaCor[index] = cor;
    setCorResposta(novaCor);

    const novoIcone = { ...iconeResposta };
    novoIcone[index] = icone;
    setIconeResposta(novoIcone);

    if (!respondidas[index]) {
      const novasRespondidas = { ...respondidas };
      novasRespondidas[index] = true;
      setRespondidas(novasRespondidas);
      setConcluidos(Object.keys(novasRespondidas).length);
    }
  }

  return (
    <ContainerCartas>
      {cartas.map((carta, index) => {
        const estado = estadoCarta[index] || 0;
        const cor = corResposta[index] || "";
        const icone = iconeResposta[index] || null;

        return (
          <Card key={index} className={`estado-${estado}`}>
            {estado === 0 && (
              <Pergunta
                pergunta={carta.pergunta}
                cor={cor}
                icone={icone}
                onClick={() => avancar(index)}
                onIconClick={() => avancar(index)}
                respondida={respondidas[index]}
              />
            )}
            {estado === 1 && (
              <Questao
                questao={carta.questao}
                onVirar={() => avancar(index)}
              />
            )}
            {estado === 2 && (
              <Resposta
                resposta={carta.resposta}
                onNaoLembrei={() =>
                  voltarParaInicio(index, "#f93031", "errado")
                }
                onQuaseLembrei={() =>
                  voltarParaInicio(index, "#fb922e", "quase")
                }
                onZap={() => voltarParaInicio(index, "#33be34", "certo")}
              />
            )}
          </Card>
        );
      })}
    </ContainerCartas>
  );
}

const ContainerCartas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 90px;
  margin-top: -10px;
`;

const Card = styled.div`
  width: 320px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  .card-pergunta,
  .card-questao,
  .card-resposta {
    display: none;
  }

  &.estado-0 .card-pergunta {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
  }

  &.estado-1 .card-questao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 131px;
    background-color: #ffffd4;
    position: relative;
    border-radius: 5px;
  }

  &.estado-2 .card-resposta {
    display: block;
    background-color: #ffffd4;
    height: 131px;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    position: relative;
  }

  img {
    cursor: pointer;
    margin-right: 10px;
  }

  p {
    margin-left: 10px;
  }
`;
